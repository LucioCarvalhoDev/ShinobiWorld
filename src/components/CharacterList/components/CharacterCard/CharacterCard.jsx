import React from "react";

import "./style.css";

function CharacterCard(props) {

  const shinobi = props.shinobi;
  
  console.log(shinobi)

  return (
    <article className="CharacterCard">
      <h3 className="CharacterCard_name">{shinobi._name}</h3>
      <p className="CharacterCard_summary">{shinobi._bio}</p>
    </article>
  );
}

export default CharacterCard;