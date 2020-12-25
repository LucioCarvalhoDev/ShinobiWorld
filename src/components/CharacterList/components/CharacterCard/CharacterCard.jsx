import React from "react";

import "./style.css";

function CharacterCard(props) {

  const shinobi = props.shinobi;
  
  return (
    <article className="CharacterCard">
      <div>
        <h3 className="CharacterCard_name">{shinobi._name}</h3>
        <i className="fas fa-trash"></i>
      </div>
        <p className="CharacterCard_summary">{shinobi._bio}</p>
    </article>
  );
}

export default CharacterCard;