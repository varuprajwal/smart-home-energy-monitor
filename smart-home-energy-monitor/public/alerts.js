export class EnergyAlerts {
    constructor(threshold = 2.0) {
        this.threshold = threshold;
    }

    checkUsage(usage) {
        if (usage > this.threshold) {
            this.showAlert(`High energy usage detected: ${usage} kWh`);
        }
    }

    showAlert(message) {
        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert';
        alertDiv.textContent = message;
        document.body.appendChild(alertDiv);
        
        setTimeout(() => alertDiv.remove(), 5000);
    }
}