import React, { useState } from "react";
import shinobiController from "./../../js/ShinobiController";
import FixedButton from "../FixedButton";
import Header from "./../Header";
import General from "./components/General";
import Nav from "./components/Nav";
import "./style.css";

function ShinobiProfile(props) {
  const [idx, setIdx] = useState(0);
  const [shinobi, setShinobi] = useState(props.shinobi);

  function handlerChangeProps(changes) {

    const newData = shinobi;
    for (const key in changes) {
      if (changes[key] === undefined) continue;
      newData[key] = changes[key]
    }

    setShinobi(newData);
  }

  const pages = [
    <General shinobi={shinobi} handlerChangeProps={handlerChangeProps} />,
    <p>example</p>
  ];

  return (
    <div className="ShinobiProfile">
      <Header title={props.shinobi.fullName} activeReturn="true" action={props.goToCharacterList}/>

      {pages[idx]}
      <Nav
        pages={["General", "Status", "Techniques", "Inventory"]}
        setter={setIdx}
      />
      <FixedButton style={{bottom: "4.5rem"}} action={()=>shinobiController.put(shinobi)}>
        <i className="far fa-save"></i>
      </FixedButton>
    </div>
  );
}

export default ShinobiProfile;
