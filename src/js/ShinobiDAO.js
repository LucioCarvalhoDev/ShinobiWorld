class ShinobiDAO {
  constructor(db) {
    this.db = db;
  }

  static example() {
    return new Shinobi("Tanzan", "Haruno");
  }

  add(name, cla) {

    const shinobi = new Shinobi(name, cla);

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(["shinobis"], "readwrite");

      transaction.objectStore("shinobis").add(shinobi);

      transaction.oncomplete = event => {
        resolve("shinobi registrado com sucesso");
      }
    })
  }

  get() {

    return new Promise((resolve, reject) => {

      const transaction = this.db.transaction(["shinobis"], "readwrite");

      const request = transaction.objectStore("shinobis").get(1);

      request.onsuccess = event => {
        console.log(request.result)
        resolve(request.result);
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
          shinobiList.push(new Shinobi(...(Object.values(cursor.value))))
          cursor.continue();
        } else {
          resolve(shinobiList)
        }

      }
    })
  }

}

class Shinobi {
  constructor(name, cla, position, bio, FOR, RES, AGL, DEX, PER, INT, CAR, FOC) {
    this._name = name;
    this._cla = cla || "Nara";
    this._position = position || "Gennin";

    this._bio = bio || "";

    this._FOR = FOR || 5;
    this._RES = RES || 5;
    this._AGL = AGL || 5;
    this._DEX = DEX || 5;
    this._PER = PER || 5;
    this._INT = INT || 5;
    this._CAR = CAR || 5;
    this._FOC = FOC || 5;

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
