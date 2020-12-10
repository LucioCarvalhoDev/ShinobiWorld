var config = {
    dbName: "inventario",
    version: 2,
    storeName: 'itens',
    keyPath: 'tipo'
}

class item {
    constructor(tipo, quantia) {
        this.tipo = tipo;
        this.quantia = quantia;
    }
}

const request = window.indexedDB.open(config.dbName, config.version);


request.onsuccess = event => {
    var db = event.target.result;
}    

request.onupgradeneeded = event => {
    var db = event.target.result;
    
    if (!db.objectStoreNames.contains(config.dbName)) {

        let objStore = (db.createObjectStore(config.storeName, {keyPath: config.keyPath}));
    }
}

function add(tipo, quantia) {
    const request = window.indexedDB.open(config.dbName, config.version);

    request.onsuccess = event => {
        var db = event.target.result;
        const transaction = db.transaction([config.storeName], 'readwrite');
        let objStore = transaction.objectStore(config.storeName);

        objStore.add(new item(tipo, quantia));

        
    }
}

add("livro", 70);