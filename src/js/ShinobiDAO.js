class ShinobiDAO {
  constructor(db) {
    this.db = db;
  }

  static example() {
    return new Shinobi("Tanzan", "Haruno");
  }

  add(shinobi) {

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["shinobis"], "readwrite");

      transaction.objectStore("shinobis").add(shinobi);

      transaction.oncomplete = event => {
        resolve("shinobi registrado com sucesso");
      }
    })
  }

    load() {

      return new Promise((resolve, reject) => {

        const shinobiList = [];

        const objectStore = this.db.transaction(["shinobis"], "readonly").objectStore("shinobis");

        objectStore.openCursor().onsuccess = event => {
          let cursor = event.target.result;

          if (cursor) {
            shinobiList.push(cursor.value);
            cursor.continue();
          }

          resolve(shinobiList);

        }
      })
    }
    
}

class Shinobi {
  constructor(name, cla, position) {
    this._name = name;
    this._cla = cla || "Nara";
    this._position = position || "Gennin";

    this._bio = "";

    this._FOR = 5;
    this._RES = 5;
    this._AGL = 5;
    this._DEX = 5;
    this._PER = 5;
    this._INT = 5;
    this._CAR = 5;
    this._FOC = 5;

    this._maxHP = undefined;
    this._actHP = undefined;
    this._maxCK = undefined;
    this._actCK = undefined;

    this._ckType = [];
  }

  get fullName() {
    return this._name + " " + this._cla;
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
}

export default ShinobiDAO;
