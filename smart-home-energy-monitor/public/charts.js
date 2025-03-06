let energyChart;

export function updateChart(data) {
    const ctx = document.getElementById('energyChart').getContext('2d');
    
    const chartData = {
        labels: data.map(reading => new Date(reading.timestamp?.toDate()).toLocaleTimeString()),
        datasets: [{
            label: 'Energy Usage (kWh)',
            data: data.map(reading => reading.usage),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    if (energyChart) {
        energyChart.data = chartData;
        energyChart.update();
    } else {
        energyChart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'kWh'
                        }
                    }
                }
            }
        });
    }
}

