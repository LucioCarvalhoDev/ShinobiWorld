import React, { useState } from "react";

import CharacterList from "./components/CharacterList";
import ShinobiProfile from "./components/ShinobiProfile/ShinobiProfile";

import ShinobiDAO from "./js/ShinobiDAO";
import shinobiController from "./js/ShinobiController.js";

import "./styles.css";

export default function App() {

  const [shinobi, setShinobi] = useState(ShinobiDAO.example());

  const goToShinobiProfile = (id) => {
  	shinobiController
  		.get(id+1)
  		.then(res => {
  			setShinobi(res);
  			setPageIdx(1);
  		})
    
  }
  const pages = [<CharacterList goToShinobiProfile={goToShinobiProfile} />, <ShinobiProfile shinobi={shinobi} />]



  const [pageIdx, setPageIdx] = useState(0);


  return pages[pageIdx];
}
