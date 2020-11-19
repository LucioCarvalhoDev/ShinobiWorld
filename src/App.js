import React, { useState } from "react";

import CharacterList from "./components/CharacterList";
import ShinobiProfile from "./components/ShinobiProfile/ShinobiProfile";

import ShinobiDAO from "./js/ShinobiDAO";

import "./styles.css";

export default function App() {
  const goToShinobiProfile = () => {
    setPageIdx(1)
  }
  const pages = [<CharacterList goToShinobiProfile={goToShinobiProfile} />, <ShinobiProfile shinobi={ShinobiDAO.example()} />]



  const [pageIdx, setPageIdx] = useState(0);


  return pages[pageIdx];
}
