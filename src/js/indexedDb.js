var indexedDb = (function () {
    var dbPromise = idb.open('protopwa-store', 1, (db) => {
        if (!db.objectStoreNames.contains('pwadata-store')) {
            db.createObjectStore('installs', { keyPath: 'id' });
        }
    });
    
    function writeData(st, data) {
        return dbPromise
            .then((db) => {
                var tx = db.transaction(st, 'readwrite');
                var store = tx.objectStore(st);
                store.put(data);
                return tx.complete;
            });
    }
    
    function readAllData(st) {
        return dbPromise
            .then((db) => {
                var tx = db.transaction(st, 'readonly');
                var store = tx.objectStore(st);
                return store.getAll();
            });
    }
    
    function clearAllData(st) {
        return dbPromise
            .then((db) => {
                var tx = db.transaction(st, 'readwrite');
                var store = tx.objectStore(st);
                store.clear();
                return tx.complete;
            });
    }
    
    function deleteItemFromData(st, id) {
        return dbPromise
        .then((db) => {
            var tx = db.transaction(st, 'readwrite');
            var store = tx.objectStore(st);
            store.delete(id);
            return tx.complete;
        })
        .then(function () {
            console.log('Item deleted');
        });
    }

    return {
        writeData: writeData,
        readAllData: readAllData,
        clearAllData: clearAllData,
        deleteItemFromData: deleteItemFromData,
    };
})();

