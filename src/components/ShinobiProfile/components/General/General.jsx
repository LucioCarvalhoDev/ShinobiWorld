import React, { useState } from "react";
import "./style.css";

function General(props) {

  const shinobi = props.shinobi;

  const [bio, setBio] = useState(shinobi._bio);

  return (
    <>
      <section className="General card">
        
      </section>
      <section className="ShinobiProfile_status card">
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
      </section>
      <section className="card">
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
      </section>
    </>
  );
}

export default General;
