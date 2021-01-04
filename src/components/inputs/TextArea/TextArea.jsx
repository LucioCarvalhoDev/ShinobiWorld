import React, {useState, useEffect} from "react";
import "./style.css";

function TextArea(props) {

  const [width, setWidth] = useState(0);

  const style = {
    width: width
  }

  const setData = props.setData ? props.setData : ()=>{};

  useEffect(() => {
    setWidth(document.querySelector(`label[for=${props.id}]`).offsetWidth);
  }, [width])

    return (
        <div className="TextArea">
          <div className="TextArea_background" style={style}></div>
          <label htmlFor={props.id}>{props.title}</label>
          <textarea 
            defaultValue={props.data[props.name]}
            id={props.id} 
            type="text" 
            placeholder={props.placeholder} 
            rows={props.rows}
            onBlur={(e) => {
              props.setData(e);
            }}/>
        </div>
    );
}

export default TextArea;