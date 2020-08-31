import React from "react";
import { render } from "@testing-library/react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";

const programs = [
	{ id: "xnY35Wc26T1", displayName: "APES EPA Fruit Tree Popu" },
	{ id: "xnY35Wc2657", displayName: "APES Form 1" },
	{ id: "xnY35Wc2658", displayName: "APES form 2" },
	{ id: "xnY35Wc2659", displayName: "APES vegetable" },
	{ id: "xnY35Wc2651", displayName: "APES tile Vegetable" },
	{ id: "xnY35Wc2678", displayName: "APES crops" },
];

function ProgramsTesting() {
	console.log(programs);

	return (
		<div>
			{programs.map((program) => (
				<MenuItem key={program.id}> {program.displayName} </MenuItem>
			))}
		</div>
	);
}

export default ProgramsTesting;
