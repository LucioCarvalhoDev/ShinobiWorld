class ConnectionFactory {

  static create() {
    return new Promise((resolve, reject) => {

      const request = window.indexedDB.open("ShinobiWorld", 1);

      request.onsuccess = event => {
        let connection = event.target.result;
        resolve(connection);
      }
    })
  }
}

export default ConnectionFactory;