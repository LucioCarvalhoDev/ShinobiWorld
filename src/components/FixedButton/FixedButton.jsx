import React from "react";

import "./style.css";

function FixedButton(props) {

  const style = props.style ? props.style : {};
  const action = props.action ? props.action : () => {};


  return (
    <div
      className="FixedButton"
      onClick={() => {
        action();
      }}
      style={style}
    >
    {props.children}
    </div>
  );
}

export default FixedButton;