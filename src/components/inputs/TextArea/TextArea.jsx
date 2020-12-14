import React, {useState, useEffect} from "react";
import "./style.css";

function TextArea(props) {

  const [width, setWidth] = useState(0);

  const style = {
    width: width
  }

  const setData = props.setData ? props.setData : ()=>{};

  useEffect(() => {
    setWidth(document.querySelector(`label[for=${props.id}]`).offsetWidth)
  })

    return (
        <div className="TextArea">
          <div className="TextArea_background" style={style}></div>
          <label htmlFor={props.id}>{props.title}</label>
          <textarea 
            defaultValue={props.data}
            id={props.id} 
            type="text" 
            placeholder={props.placeholder} 
            rows={props.rows}
            onChange={(e) => {
              const obj = {};

              obj[props.name] = e.target.value;
              setData(obj);
            }}/>
        </div>
    );
}

export default TextArea;