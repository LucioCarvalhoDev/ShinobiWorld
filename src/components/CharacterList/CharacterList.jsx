import React, {useState} from "react";
import Header from "../Header/Header";

import shinobiController from "./../../js/ShinobiController";
import AddButton from "./components/AddButton/AddButton";
import CharacterCard from "./components/CharacterCard/CharacterCard";

function CharacterList(props) {

  const [list, setList] = useState([]);


  shinobiController
    .load()
    .then(res => setList(res));
    
  return (
    <div className="CharacterList">
      <Header />

      <ul className="CharacterList_list" onClick={() => console.log(list)}>
        {list.map((shinobi, id) => {
          return <li key={id}><CharacterCard shinobi={shinobi}/></li>
        })}
      </ul>

      <AddButton />
    </div>
  );
}

export default CharacterList;
