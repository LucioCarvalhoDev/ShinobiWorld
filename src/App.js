import React, {useState} from "react";

import CharacterList from "./components/CharacterList";
import ShinobiProfile from "./components/ShinobiProfile/ShinobiProfile";

import shinobiController from "./js/ShinobiController";
import ShinobiDAO from "./js/ShinobiDAO";

import "./styles.css";

//  shinobiController.load();

export default function App() {

  const pages = [<CharacterList />,<ShinobiProfile shinobi={ShinobiDAO.example()} />]

  const [idx, setIdx] = useState(0);
  

  return pages[idx];
}
