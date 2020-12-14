import React, { useState } from "react";
import TextArea from "../../../inputs/TextArea/TextArea";
import SectionBox from "./../SectionBox";

import "./style.css";

function General(props) {

  const shinobi = props.shinobi;

  return (
    <section className="General">
      <SectionBox>

        <TextArea
          title="Apelido/titulo"
          id="General_ipt-name"
          placeholder="Relampago de Konoha"
          rows="3"
          data={shinobi._title}
          name="_title"
          setData={props.handlerChangeProps}
          />
      </SectionBox>
      <SectionBox>

        {/* <TextArea 
          title="País de Origem"
          id="General_ipt-pais"/> */}
        <TextArea 
          title="Clã"
          id="General_ipt-cla"
          data={shinobi._cla}
          name="_cla"
          setData={props.handlerChangeProps}/>
      </SectionBox>
      <SectionBox className="card">
        <TextArea
          title="Descrição"
          id="General_ipt-bio"
          rows="5"
          data={shinobi._bio}
          name="_bio"
          setData={props.handlerChangeProps}/>
      </SectionBox>
      {/* <SectionBox>
        <TextArea
          title="Genero"
          id="General_ipt-genero" />
        <TextArea
          title="Idade"
          id="General_ipt-idade" />
      </SectionBox> */}
    </section>
  );
}

export default General;
