import React from "react";

import "./style.css";

function AddButton(props) {

  return (
    <div
      className="AddButton"
      onClick={() => {
        props.action();
      }}
    >
      +
    </div>
  );
}

export default AddButton;