import React from "react";

import "./style.css";

function TextInput(props) {

	return (
		<div className="TextInput">
			<label htmlFor="ipt-name">{props.title}</label>
			<input id="ipt-name" type="text" onChange={(event) => {
				props.text(event.target.value)
			}}/>
		</div>
	);
}

export default TextInput;