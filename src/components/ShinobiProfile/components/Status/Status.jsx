import React from 'react';
import SectionBox from '../SectionBox';
import AttrTable from './components/AttrTable/AttrTable';

import "./style.css";

function Status(props) {

    const shinobi = props.shinobi;

    return (
        <section className="Status">
            <SectionBox>
                <AttrTable shinobi={shinobi}/>
            </SectionBox>
        </section>
    );
}

export default Status;