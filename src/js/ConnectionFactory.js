class ConnectionFactory {

  static create() {
    return new Promise((resolve, reject) => {

      const request = window.indexedDB.open("ShinobiWorld", 2);

      request.onupgradeneeded = event => {
        let connection = event.target.result;

        if (!connection.objectStoreNames.contains("shinobis")) {
          connection.createObjectStore("shinobis", {keyPath: 'id'})
        }
      }

      request.onsuccess = event => {
        let connection = event.target.result;

        resolve(connection);
      }
    })
  }
}

export default ConnectionFactory;