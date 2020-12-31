import React from 'react';
import SectionBox from '../SectionBox';
import AttrTable from './components/AttrTable/AttrTable';
import AttrRadar from "./components/AttrRadar/AttrRadar";

import "./style.css";

function Status(props) {

    const shinobi = props.shinobi;

    return (
        <section className="Status">
            <SectionBox>
                <AttrTable shinobi={shinobi} setData={props.handlerChangeProps}/>
            </SectionBox>
            <SectionBox>
                <AttrRadar shinobi={shinobi} setData={props.handlerChangeProps}/>
            </SectionBox>
        </section>
    );
}

export default Status;