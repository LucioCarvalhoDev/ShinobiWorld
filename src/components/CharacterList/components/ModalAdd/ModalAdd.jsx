import React, {useState} from "react";
import TextInput from "../../../inputs/TextInput";
import Button from "../../../inputs/Button";

import "./style.css";

function ModalAdd(props) {

	// let action = !props.action ? (() => { }) : props.action;

	const [text, setText] = useState("");

	function handlerAddShinobi() {
		props.addShinobi(text);
		props.close();
	}


	return (
		<section className="ModalAdd" onClick={(e) => {
			if (e.target.className === "ModalAdd") props.close();
		}}>
			<form className="ModalAdd_modal">
				<TextInput title="Primeiro Nome" text={setText} />
				<Button title="Criar" styleMode="dark" action={handlerAddShinobi} />
			</form>
		</section>

	);
}

export default ModalAdd;