import React from "react";
import "./style.css";

function SectionBox(props) {

	const title = !props.title ? "" : <h3 className="SectionBox_title">{props.title}</h3>

	return (
		<section className="SectionBox">
			{title}
			{props.children}
		</section>
	);
}

export default SectionBox;