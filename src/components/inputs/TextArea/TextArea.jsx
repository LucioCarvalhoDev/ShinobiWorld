import React from "react";
import "./style.css";

function TextArea(props) {

    return (
        <div className="TextArea">
          <label htmlFor={props.id}>{props.title}</label>
          <textarea id={props.id} type="text" placeholder={props.placeholder} rows={props.rows}
          />
        </div>
    );
}

export default TextArea;