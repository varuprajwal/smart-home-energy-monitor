export function exportToCSV(data) {
    const csvContent = [
        ["Timestamp", "Usage (kWh)"],
        ...data.map(reading => [
            reading.timestamp?.toDate().toISOString() || new Date().toISOString(),
            reading.usage
        ])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `energy-data-${new Date().toISOString()}.csv`;
    a.click();
}
