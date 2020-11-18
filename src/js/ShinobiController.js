import ConnectionFactory from "./ConnectionFactory";
import ShinobiDAO from "./ShinobiDAO";

class ShinobiController {
  constructor() {
    
  }

  add(shinobi) {
    ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.add(shinobi))
      .then(msg => console.log(msg))
  }

  load() {
    return ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.load())

  }
}

const shinobiController = new ShinobiController();

export default shinobiController;