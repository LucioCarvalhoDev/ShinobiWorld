import React, { useState } from "react";

import CharacterList from "./components/CharacterList";
import ShinobiProfile from "./components/ShinobiProfile/ShinobiProfile";

import ShinobiDAO from "./js/ShinobiDAO";
import shinobiController from "./js/ShinobiController.js";

import "./styles.css";

export default function App() {

  const [shinobi, setShinobi] = useState(ShinobiDAO.example());

  function goToShinobiProfile(id) {
  	shinobiController
  		.get(id+1)
  		.then(res => {
  			setShinobi(res);
  			setPageIdx(1);
  		})
  }

  function goToCharacterList() {
    setPageIdx(0);
  }

  const pages = [
    <CharacterList goToShinobiProfile={goToShinobiProfile} addShinobi={shinobiController.add.bind(shinobiController)}/>,
    <ShinobiProfile shinobi={shinobi} goToCharacterList={goToCharacterList} />
  ]



  const [pageIdx, setPageIdx] = useState(0);


  return pages[pageIdx];
}
