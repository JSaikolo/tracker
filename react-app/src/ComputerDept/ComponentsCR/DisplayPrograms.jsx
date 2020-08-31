import React, { Component } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import Appp from "../../Appp";
import { render } from "@testing-library/react";

const Programs = [
	{ label: "Form 2A: APES Yield Estimate for sampled Fruit Trees" },
];

function ApesTiles() {
	render(
		<div>
			<Appp />
		</div>
	);
}


class DisplayPrograms extends Component {
	render() {
		console.log(Programs)
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<Select 
							options={Programs}
							className="mdb-select md-form"
							searchable=""
							isClearable
						/>
					</div>
					<div className="col-md-4"></div>
				</div>
			</div>
		);
	}
}

export default DisplayPrograms;
