import ConnectionFactory from "./ConnectionFactory";
import ShinobiDAO from "./ShinobiDAO";

class ShinobiController {


  add(name, cla) {
    ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.add(name, cla))
  }

  load() {
    return ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.load())

  }

  get() {
    return ConnectionFactory 
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.get())
  }
}

const shinobiController = new ShinobiController();

export default shinobiController;