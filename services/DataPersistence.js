define(function () {
    class DataPersistence {
        saveData(data) {
            localStorage.setItem('appData', JSON.stringify(data));
        }

        loadData() {
            const data = localStorage.getItem('appData');
            return data ? JSON.parse(data) : null;
        }

        getLastBreakingChangesDate() {
            return localStorage.getItem('lastBreakingChangesDate');
        }

        setLastBreakingChangesDate(date) {
            localStorage.setItem('lastBreakingChangesDate', date);
        }

        resetData() {
            localStorage.removeItem('appData');
            localStorage.removeItem('lastBreakingChangesDate');
        }
    }

    return DataPersistence;
});