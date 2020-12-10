import React, { useState } from "react";
import Header from "./../Header";
import General from "./components/General";
import Nav from "./components/Nav";
import "./style.css";

function ShinobiProfile(props) {
  const [idx, setIdx] = useState(0);

  const pages = [<General shinobi={props.shinobi} />, <p>cachaça</p>];

  return (
    <div className="ShinobiProfile">
    
      <Header title={props.shinobi.fullName} activeReturn="true" action={props.goToCharacterList}/>

      {pages[idx]}
      <Nav
        pages={["General", "Status", "Techniques", "Inventory"]}
        setter={setIdx}
      />
    </div>
  );
}

export default ShinobiProfile;
