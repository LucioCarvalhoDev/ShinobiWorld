import React, { useState } from "react";
import TextArea from "../../../inputs/TextArea/TextArea";
import SectionBox from "./../SectionBox";

import "./style.css";

function General(props) {

  const shinobi = props.shinobi;

  const [bio, setBio] = useState(shinobi._bio);

  return (
    <section className="General">
      <SectionBox>
        
        <TextArea
          title="Apelido/titulo"
          id="General_ipt-name"
          placeholder="Relampago de Konoha"
          rows="3"/>
      </SectionBox>
      <SectionBox>
        <div className="physical">
          <p>FOR: {shinobi.FOR}</p>
          <p>RES: {shinobi.RES}</p>
          <p>AGL: {shinobi.AGL}</p>
          <p>DEX: {shinobi.DEX}</p>
        </div>
        <div className="spirit">
          <p>INT: {shinobi.INT}</p>
          <p>PER: {shinobi.PER}</p>
          <p>CAR: {shinobi.CAR}</p>
          <p>FOC: {shinobi.FOC}</p>
        </div>
      </SectionBox>
      <SectionBox className="card">
        <TextArea 
          title="bio"
          id="General_ipt-bio"/>
      </SectionBox>
    </section>
  );
}

export default General;
