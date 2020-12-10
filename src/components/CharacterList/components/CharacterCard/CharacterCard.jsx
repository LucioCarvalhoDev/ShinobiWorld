import React from "react";

import "./style.css";

function CharacterCard(props) {

  const shinobi = props.shinobi;
  
  return (
    <article className="CharacterCard">
      <div>
        <h3 className="CharacterCard_name">{shinobi._name}</h3>
        <p className="CharacterCard_summary">{shinobi._bio}</p>
      </div>
      <i className="fas fa-trash"></i>
    </article>
  );
}

export default CharacterCard;