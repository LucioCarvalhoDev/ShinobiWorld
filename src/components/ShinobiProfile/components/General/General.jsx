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
          id="ipt-name"
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
        <h4>Bio</h4>
        <textarea onChange={(event) => {
          event.stopPropagation();
          setBio(event.target.value);
        }}
          
          defaultValue={bio}
          name="bio"
          id="bio"
          cols="30"
          rows="10"
        ></textarea>
      </SectionBox>
    </section>
  );
}

export default General;
