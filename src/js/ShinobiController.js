import ConnectionFactory from "./ConnectionFactory";
import ShinobiDAO from "./ShinobiDAO";

class ShinobiController {


  add(name) {
    return ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.add(name))
      .then(message => console.log(message));
  }

  load() {
    return ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.load())

  }

  get(idx) {
    return ConnectionFactory 
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.get(idx))
  }

  del(idx) {
    return ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.del(idx));
  }

  put(shinobi) {
    return ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.put(shinobi))
  }
}

const shinobiController = new ShinobiController();

export default shinobiController;