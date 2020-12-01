import React, {useState, useEffect} from "react";
import Header from "../Header/Header";

import shinobiController from "./../../js/ShinobiController";
import AddButton from "./components/AddButton/AddButton";
import CharacterCard from "./components/CharacterCard/CharacterCard";

function CharacterList(props) {

  const [list, setList] = useState([]);

  

  useEffect(() => {
    shinobiController
    .load()
    .then(res => {
      if (JSON.stringify(list) !== JSON.stringify(res)) setList(res);
    });
  })
    
  return (
    <div className="CharacterList">
      <Header title="Personagens"/>

      <ul className="CharacterList_list">
        {list.map((shinobi, id) => {
          return (
            <li onClick={() => {
             props.goToShinobiProfile(id);
            }} key={id}>
              <CharacterCard shinobi={shinobi}/>
            </li>
          );
        })}
      </ul>

      <AddButton />
    </div>
  );
}

export default CharacterList;
