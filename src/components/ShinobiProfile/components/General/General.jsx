import React, { useState, useEffect } from "react";
import "./style.css";

function General(props) {
  const shinobi = props.shinobi;

  const [FOR, setFOR] = useState(shinobi.FOR);
  const [RES, setRES] = useState(shinobi.RES);
  const [AGL, setAGL] = useState(shinobi.AGL);
  const [DEX, setDEX] = useState(shinobi.DEX);
  const [INT, setINT] = useState(shinobi.INT);
  const [PER, setPER] = useState(shinobi.PER);
  const [CAR, setCAR] = useState(shinobi.CAR);
  const [FOC, setFOC] = useState(shinobi.FOC);

  const [bio, setBio] = useState("aff");

  // useEffect(() => {
  //   const bio = document.querySelector("#bio");
  // });

  return (
    <>
      <section className="General card">
        <h3 className="General_name">{shinobi.fullName}</h3>
        <h4 className="General_position">
          {shinobi._position} | {shinobi.rank}
        </h4>
      </section>
      <section className="ShinobiProfile_status card">
        <div className="physical">
          <p>FOR: {FOR}</p>
          <p>RES: {RES}</p>
          <p>AGL: {AGL}</p>
          <p>DEX: {DEX}</p>
        </div>
        <div className="spirit">
          <p>INT: {INT}</p>
          <p>PER: {PER}</p>
          <p>CAR: {CAR}</p>
          <p>FOC: {FOC}</p>
        </div>
      </section>
      <section className="card">
        <h4>Bio</h4>
        <textarea
          onChange={(event) => {
            event.stopPropagation();
            shinobi._bio = event.target.value;
          }}
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
