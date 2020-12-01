import React from "react";
import "./style.css";

function SectionBox(props) {

	return (
		<section className="SectionBox">
			{props.children}
		</section>
	);
}

export default SectionBox;