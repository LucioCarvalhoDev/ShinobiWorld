import React, {useState, useEffect} from "react";
import Header from "../Header/Header";

import shinobiController from "./../../js/ShinobiController";
import AddButton from "./components/AddButton/";
import CharacterCard from "./components/CharacterCard/";
import ModalAdd from "./components/ModalAdd";

function CharacterList(props) {

  shinobiController
    .load()
    .then(res => {
      console.log(res);
    })

  const [list, setList] = useState([]);

  const [modalAdd, setModalAdd] = useState(false);

  useEffect(() => {
    shinobiController
    .load()
    .then(res => {
      if (JSON.stringify(list) !== JSON.stringify(res)) setList(res);
    });
  })

  function handlerModalAdd() {
    setModalAdd(!modalAdd);
  }
    
  return (
    <div className="CharacterList">
      <Header title="Personagens"/>

      <ul className="CharacterList_list">
        {list.map((shinobi, id) => {
          return (
            <li onClick={() => {
             props.goToShinobiProfile(shinobi.id);
            }} key={id}>
              <CharacterCard shinobi={shinobi}/>
            </li>
          );
        })}
        {modalAdd && <ModalAdd addShinobi={props.addShinobi} close={handlerModalAdd}/>}
      </ul>

      <AddButton action={handlerModalAdd}/>
    </div>
  );
}

export default CharacterList;
