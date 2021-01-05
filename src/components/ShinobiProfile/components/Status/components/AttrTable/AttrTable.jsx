import React from 'react';

import "./style.css";

function AttrTable(props) {
   
    function handlerIncrementAttr(target, sinal) {
        const {_attr} = props.shinobi;
        _attr[target] += (5*sinal);
        props.setShinobi({...props.shinobi, _attr})
    }

    
    return (
        <section className="AttrTable">
                {Object.keys(props.shinobi._attr).map((str, id) => {
                    return (
                        <div className="AttrTable_attr" key={id}>
                            <span>{str}: {props.shinobi._attr[str]}</span>
                            <span className="AttrTable_attr_box-button">
                                <button onClick={() => handlerIncrementAttr(str, -1)}>-</button>
                                <button onClick={() => handlerIncrementAttr(str, +1)}>+</button>
                            </span>
                        </div>
                    )
                })}
        </section>
    );
}

export default AttrTable;