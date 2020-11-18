import ConnectionFactory from "./ConnectionFactory";
import ShinobiDAO from "./ShinobiDAO";

class ShinobiController {


  add(name, cla) {
    ConnectionFactory
      .create()
      .then(connection => new ShinobiDAO(connection))
      .then(dao => dao.add(name, cla))
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