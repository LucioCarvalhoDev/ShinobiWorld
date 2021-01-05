import React from 'react';
import SectionBox from '../SectionBox';
import AttrRadar from './components/AttrRadar';
import AttrTable from './components/AttrTable/AttrTable';

import "./style.css";

function Status(props) {

    

    return (
        <section className="Status">
            <div className="Status_attr">
                <SectionBox>
                    <AttrTable shinobi={props.shinobi} setShinobi={props.setShinobi} />
                </SectionBox>
                <SectionBox>
                    <AttrRadar shinobi={props.shinobi} />
                </SectionBox>
            </div>

        </section>
    );
}

export default Status;