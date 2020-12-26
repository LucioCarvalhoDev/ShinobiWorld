import React from 'react';

import "./style.css";

function AttrTable(props) {

    const attr = props.shinobi._attr;

    function handlerAdd5(n) {
        
    }
    
    return (
        <section className="AttrTable">
            <div className="physical">
                <div>
                    <span>{attr.FOR}</span>
                    <span>
                        <button>-</button>
                        <button>+</button>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default AttrTable;