import React, { Component } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

const Programs = [
	{ label: "Form 2A: APES Yield Estimate for sampled Fruit Trees" },
	{ label: "Form 2B: APES Area Estimation For Bananas and Pineapples" },
	{ label: "Form 2C: APES Area Estimation by Vegetable Type" },
	{
		label:
			"Form 3 - APES Crop Yield Assessments Relative to the Previous Season for the Selected Household(Second Forecast Only)",
	},
	{
		label:
			"Form 3B: APES Yield and Production Estimation for Bananas and Pineapples",
	},
	{ label: "Form 3C: APES Yield and Production Estimation for Vegetables" },
	{
		label:
			"Form 4 - APES Area(HA) and production(KG) of Major crops Grown by Selected Household(Third Forecast/Estimate only)",
	},
	{ label: "Form 4B -APES EPA Banana and Pineapple Production Estimate" },
	{ label: "Form 5C: APES Yield Assessment for Vegetables" },
	{ label: "Form B1: APES Complete Listing of Fruit Trees and Their Ages" },
	{ label: "Form B - APES Complete Listing of Households in selected Blocks" },

	{
		label:
			"Z-----------------------------Form 2 APES Yield Assessment For The Major Crops In The Selected Blocks (First Forecast Only)",
	},
];

class DisplayApesForms extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<Select
							options={Programs}
							className="mdb-select md-form"
							searchable=""
							placeholder="Select or Search"
							//onChange={(e)=>this.searchSpace(e)}
						/>
					</div>
					<div className="col-md-4"></div>
				</div>
			</div>
		);
	}
}

export default DisplayApesForms;
