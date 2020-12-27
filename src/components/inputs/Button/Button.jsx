import React from "react";

import "./style.css";

function Button(props) {

    let styleMode = !props.styleMode ? "light" : "dark"
    let action = !props.action ? (() => { }) : props.action;

    return (
        <button
            className={"Button " + styleMode}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                action();
            }}
        >{props.title}</button>
    );
}

export default Button;