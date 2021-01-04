import React, { useEffect } from "react";
import "./style.css";


function Header(props) {

	let button = "";

	let func = Function;

	if (props.activeReturn) {

		func = props.action;

		button = (
		<div 
			className="Header_return" 
			onClick={() => func()}
		>
			<i className="fas fa-arrow-left"></i>
		</div>
		);
	}

	if (props.action) func = props.action;


	return (
		<section className="Header">
			{button}
			<h2 className="Header_title">{props.title}</h2>
		</section>
	);
}

export default Header;
