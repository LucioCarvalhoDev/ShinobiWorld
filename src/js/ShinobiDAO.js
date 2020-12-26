const devMode = false;

class ShinobiDAO {
  constructor(db) {
    this.db = db;
  }

  static example() {
    return new Shinobi({_name:"Tanzan", _cla:"Haruno"});
  }

  static new(_name) {
    return new Shinobi({_name});
  }

  add(_name) {

    const shinobi = new Shinobi({_name});
    
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["shinobis"], "readwrite");
      
      let shinobis = transaction.objectStore("shinobis");

      let request = shinobis.add(shinobi);

      request.oncomplete = event => {
        resolve("shinobi registrado com sucesso");
      }

      request.onerror = event => {
        reject("erro ao registrar o shinobi");
      }
    })
  }

  put(shinobi) {

    return new Promise((resolve, reject) => {

      const transaction = this.db.transaction(["shinobis"], "readwrite");

      const request = transaction
        .objectStore("shinobis")
        .put(shinobi);

      request.onsuccess = e => {
        resolve("registro atualizado com sucesso");
      }

      request.onerror = e => {
        reject("erro ao efetua put");
      }
    })
  }

  get(id) {

    return new Promise((resolve, reject) => {

      const transaction = this.db.transaction(["shinobis"], "readwrite");

      const request = transaction.objectStore("shinobis").get(id);

      request.onsuccess = event => {
        
        resolve(new Shinobi((request.result)));
      }
    })
  }

  load() {

    return new Promise((resolve, reject) => {
      
      const shinobiList = [];

      const objectStore = this.db.transaction(["shinobis"], "readonly").objectStore("shinobis");

      const request = objectStore.openCursor();
      
      request.onsuccess = event => {
        let cursor = event.target.result;

        if (cursor) {
          shinobiList.push(cursor.value)
          cursor.continue();
        } else {
          devMode && console.log(shinobiList)
          resolve(shinobiList)
        }
      }

      request.onerror = event => {
        resolve("erro ao carregar dados");
      }
    })
  }

  del(idx) {
    return new Promise((resolve, reject) => {

      const transaction = this.db.transaction(["shinobis"], "readwrite");
      
      let shinobis = transaction.objectStore("shinobis");

      let request = shinobis.delete(idx);

      request.onsuccess = e => {
        resolve(this.load());
      }

      request.onerror = e => {
        reject("Não foi possivel apagar o registro");
      }
    })
  }

}

class Shinobi {
  constructor(obj) {
    this._name = obj._name || " ";
    this._cla = obj._cla || " ";
    this._position = obj._position || " ";
    
    this._title = obj._title;

    this._bio = obj._bio || "";

    this._attr = {
      FOR: obj.FOR || 5,
      RES: obj.RES || 5,
      AGL: obj.AGL || 5,
      DEX: obj.DEX || 5,
      PER: obj.PER || 5,
      INT: obj.INT || 5,
      CAR: obj.CAR || 5,
      FOC: obj.FOC || 5,
    }
    
    this._maxHP = undefined;
    this._actHP = undefined;
    this._maxCK = undefined;
    this._actCK = undefined;
    
    this._ckType = [];
    this.id = obj.id || Date.now();

    this.init();
  }

  get fullName() {
    return `${this._name} ${this._cla}`;
  }

  get FOR() {
    return this._FOR;
  }

  get RES() {
    return this._RES;
  }

  get AGL() {
    return this._AGL;
  }

  get PER() {
    return this._PER;
  }

  get DEX() {
    return this._DEX;
  }

  get INT() {
    return this._INT;
  }

  get CAR() {
    return this._CAR;
  }

  get FOC() {
    return this._FOC;
  }

  get rank() {
    return (
      this.FOR +
      this.RES +
      this.AGL +
      this.DEX +
      this.INT +
      this.PER +
      this.CAR +
      this.FOC
    );
  }

  updateMaxHP() {
    this._maxHP = Math.round(this.RES * 10 + this.FOR * 5);
  }

  updateMaxCK() {
    this._maxCK = Math.round(this._INT * 5 + this.PER);
  }

  init() {
    this.updateMaxCK();
    this.updateMaxHP();
  }
}

export default ShinobiDAO;
