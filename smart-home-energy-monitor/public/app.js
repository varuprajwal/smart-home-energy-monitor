import { db } from './firebase-config.js';
import { 
    collection, 
    query, 
    orderBy, 
    limit, 
    onSnapshot, 
    addDoc, 
    serverTimestamp 
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { updateChart } from './charts.js';
import { EnergyAlerts } from './alerts.js';
import { exportToCSV } from './export.js';

class EnergyMonitor {
    constructor() {
        this.energyData = [];
        this.alerts = new EnergyAlerts();
        this.initializeFirebaseListeners();
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.getElementById('exportData').addEventListener('click', () => {
            exportToCSV(this.energyData);
        });

        document.getElementById('threshold').addEventListener('change', (e) => {
            this.alerts.threshold = parseFloat(e.target.value);
        });
    }

    initializeFirebaseListeners() {
        const energyRef = collection(db, 'energy_usage');
        const q = query(energyRef, orderBy('timestamp', 'desc'), limit(24));
        
        onSnapshot(q, (snapshot) => {
            this.energyData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            this.updateUI();
        });
    }

    updateUI() {
        updateChart(this.energyData);
        
        const currentUsage = this.energyData[0]?.usage || 0;
        document.getElementById('currentUsage').textContent = `${currentUsage.toFixed(2)} kWh`;
        
        this.alerts.checkUsage(currentUsage);
        
        const average = this.calculateDailyAverage();
        document.getElementById('dailyAverage').textContent = `${average} kWh`;
    }

    calculateDailyAverage() {
        if (this.energyData.length === 0) return "0.00";
        const sum = this.energyData.reduce((acc, curr) => acc + curr.usage, 0);
        return (sum / this.energyData.length).toFixed(2);
    }

    async addEnergyReading(usage) {
        try {
            await addDoc(collection(db, "energy_usage"), {
                usage: usage,
                timestamp: serverTimestamp()
            });
        } catch (error) {
            console.error("Error adding reading:", error);
        }
    }

    startSimulation() {
        setInterval(() => {
            const randomUsage = (Math.random() * 2 + 0.5).toFixed(2);
            this.addEnergyReading(parseFloat(randomUsage));
        }, 60000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const monitor = new EnergyMonitor();
    monitor.startSimulation();
});
