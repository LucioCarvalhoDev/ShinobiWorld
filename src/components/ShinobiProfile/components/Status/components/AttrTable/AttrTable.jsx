import React, {useState, useEffect} from 'react';

import "./style.css";

function AttrTable(props) {
    // eslint-disable-next-line
    const [FOR, setFOR] = useState(props.shinobi._attr.FOR);
    // eslint-disable-next-line
    const [RES, setRES] = useState(props.shinobi._attr.RES);
    // eslint-disable-next-line
    const [DEX, setDEX] = useState(props.shinobi._attr.DEX);
    // eslint-disable-next-line
    const [AGL, setAGL] = useState(props.shinobi._attr.AGL);
    // eslint-disable-next-line
    const [INT, setINT] = useState(props.shinobi._attr.INT);
    // eslint-disable-next-line
    const [PER, setPER] = useState(props.shinobi._attr.PER);
    // eslint-disable-next-line
    const [CAR, setCAR] = useState(props.shinobi._attr.CAR);
    // eslint-disable-next-line
    const [FOC, setFOC] = useState(props.shinobi._attr.FOC);
    

    function handlerIncrementAttr(target, sinal) {
        eval(`set${target}(${target}+${5*sinal})`);
    }

    useEffect(() => {
        const changes = {_attr: {}};
        Object.keys(props.shinobi._attr).forEach(str => {
            changes["_attr"][str] = eval(str);
        })
        props.setData(changes)
    })
    
    return (
        <section className="AttrTable">
            <div className="physical">
                {Object.keys(props.shinobi._attr).map((str, id) => {
                    return (
                        <div key={id}>
                            <span>{str}: {eval(`${str}`)}</span>
                            <span>
                                <button onClick={() => handlerIncrementAttr(str, -1)}>-</button>
                                <button onClick={() => handlerIncrementAttr(str, +1)}>+</button>
                            </span>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default AttrTable;