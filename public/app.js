class EnergyMonitor {
    constructor() {
        this.energyData = [];
        this.threshold = 2.0;
        this.chart = null;
        this.initializeChart();
        this.initializeEventListeners();
        this.startSimulation();
    }

    initializeEventListeners() {
        document.getElementById('exportData').addEventListener('click', () => {
            this.exportToCSV();
        });

        document.getElementById('threshold').addEventListener('change', (e) => {
            this.threshold = parseFloat(e.target.value);
        });
    }

    initializeChart() {
        const ctx = document.getElementById('energyChart').getContext('2d');
        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Energy Usage (kWh)',
                    data: [],
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    updateUI(usage) {
        // Update current usage
        document.getElementById('currentUsage').textContent = `${usage.toFixed(2)} kWh`;
        
        // Update chart
        const now = new Date();
        this.energyData.push({
            timestamp: now.toLocaleTimeString(),
            usage: usage,
            fullDate: now // Store the full date for export
        });
        
        // Keep only last 24 readings
        if (this.energyData.length > 24) {
            this.energyData.shift();
        }

        // Update chart data
        this.chart.data.labels = this.energyData.map(d => d.timestamp);
        this.chart.data.datasets[0].data = this.energyData.map(d => d.usage);
        this.chart.update();

        // Update daily average
        const average = this.calculateDailyAverage();
        document.getElementById('dailyAverage').textContent = `${average} kWh`;

        // Check threshold
        if (usage > this.threshold) {
            this.showAlert(`High energy usage detected: ${usage.toFixed(2)} kWh`);
        }
    }

    calculateDailyAverage() {
        if (this.energyData.length === 0) return "0.00";
        const sum = this.energyData.reduce((acc, curr) => acc + curr.usage, 0);
        return (sum / this.energyData.length).toFixed(2);
    }

    showAlert(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert';
        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);
        
        setTimeout(() => alertDiv.remove(), 5000);
    }

    exportToCSV() {
        const csvContent = [
            ["Timestamp", "Usage (kWh)"],
            ...this.energyData.map(reading => [
                reading.fullDate.toLocaleString(), // Use localized date string
                reading.usage.toFixed(2)
            ])
        ].map(row => row.join(",")).join("\n");

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `energy-data-${new Date().toLocaleString().replace(/[/:]/g, '-')}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    startSimulation() {
        // Generate random data every 2 seconds
        setInterval(() => {
            const randomUsage = Math.random() * 2 + 0.5;
            this.updateUI(randomUsage);
        }, 2000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EnergyMonitor();
});