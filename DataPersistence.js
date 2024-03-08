define(function () {
    class DataPersistence {
        saveData(data) {
            localStorage.setItem('appData', JSON.stringify(data));
        }

        loadData() {
            const data = localStorage.getItem('appData');
            return data ? JSON.parse(data) : null;
        }
    }

    return DataPersistence;
});