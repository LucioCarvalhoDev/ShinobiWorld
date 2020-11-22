import React, { useState } from "react";
import ShinobiDAO from "../../../../js/ShinobiDAO";

function CharacterCard(props) {

  const shinobi = props.shinobi;

  return (
    <article className="CharacterCard">
      <h3 className="CharacterCard_name">{shinobi.fullName()}</h3>
      <p className="CharacterCard_summary">{shinobi._bio}</p>
    </article>
  );
}

export default CharacterCard;