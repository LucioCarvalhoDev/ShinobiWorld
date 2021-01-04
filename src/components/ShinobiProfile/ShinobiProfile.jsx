import React, { useEffect, useState } from "react";
import shinobiController from "./../../js/ShinobiController";
import Header from "./../Header";
import General from "./components/General";
import Status from "./components/Status";
import Nav from "./components/Nav";
import "./style.css";

function ShinobiProfile(props) {
  const [idx, setIdx] = useState(0);
  
  function handlerFormatName() {
    return props.shinobi._name + " " + props.shinobi._cla;
  }

  useEffect(() => {
    console.log('pah')
    shinobiController
      .put(props.shinobi)
      .catch(msg => {
        console.log(msg)
      })
  }, [props.shinobi])

  const pages = [
    <General shinobi={props.shinobi} setShinobi={props.setShinobi} />,
    <Status shinobi={props.shinobi} setShinobi={props.setShinobi} />
  ];

  return (
    <div className="ShinobiProfile">
      <Header title={handlerFormatName()} activeReturn="true" action={props.goToCharacterList} />

      {pages[idx]}
      <Nav
        pages={["General", "Status", "Techniques", "Inventory"]}
        setter={setIdx}
      />
    </div>
  );
}

export default ShinobiProfile;
