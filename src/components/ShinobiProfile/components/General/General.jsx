import React, { useEffect } from "react";
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
          rows="1"
          data={shinobi}
          name="_title"
          setData={(e) => {
            var {_title} = props.shinobi;
            _title = e.target.value;
            props.setShinobi({...props.shinobi, _title})
          }}
        />
      </SectionBox>
      <SectionBox>
        <TextArea
          title="Clã"
          id="General_ipt-cla"
          data={shinobi}
          name="_cla"
          setData={(e) => {
            var {_cla} = props.shinobi;
            _cla = e.target.value;
            props.setShinobi({...props.shinobi, _cla})
          }}
          rows="1" />
      </SectionBox>
      <SectionBox className="card">
        <TextArea
          title="Descrição"
          id="General_ipt-bio"
          rows="5"
          data={shinobi}
          name="_bio"
          setData={(e) => {
            var {_bio} = props.shinobi;
            _bio = e.target.value;
            props.setShinobi({...props.shinobi, _bio})
          }} />
      </SectionBox>
    </section>
  );
}

export default General;
