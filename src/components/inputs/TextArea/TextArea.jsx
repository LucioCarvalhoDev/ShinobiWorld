import React, {useState, useEffect} from "react";
import "./style.css";

function TextArea(props) {

  const [width, setWidth] = useState(0);

  const style = {
    width: width
  }

  useEffect(() => {
    setWidth(document.querySelector(`label[for=${props.id}]`).offsetWidth)
  })

    return (
        <div className="TextArea">
          <div className="TextArea_background" style={style}></div>
          <label htmlFor={props.id}>{props.title}</label>
          <textarea id={props.id} type="text" placeholder={props.placeholder} rows={props.rows}
          />
        </div>
    );
}

export default TextArea;