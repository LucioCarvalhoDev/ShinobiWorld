import React from "react";
import "./style.css";

function Header(props) {

	let returnButton = "";
	let func = new Function();

	if (props.activeReturn) returnButton = "<";
	if (props.action) func = props.action;

  return (
  	<section className="Header">
  		<div className="Header_return" onClick={() => {
  			func();
  		}}>{returnButton}</div>
  		<h2 className="Header_title">{props.title}</h2>
  	</section>
  	);
}

export default Header;
