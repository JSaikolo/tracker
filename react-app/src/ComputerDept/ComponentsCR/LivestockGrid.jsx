import React from "react";

import { Grid, Paper } from "@material-ui/core";
import { render } from "@testing-library/react";

//import AppFilterAdv from "./AppFilterAdv";

import LivestockApesTab from "./LivestockApesTab";
import TestProgramsTab from "./TestProgramsTab";

function LivestockTabAp() {
	render(
		<div>
			<LivestockApesTab />
		</div>
	);
}

function TestProgramTabAp() {
	render(
		<div>
			<TestProgramsTab />
		</div>
	);
}

const LivestockGrid = () => {
	const livestock = () => {
		var div = document.getElementById("jacob");
		div.innerHTML = "";

		LivestockTabAp();
	};

	const test = () => {
		var div = document.getElementById("jacob");
		div.innerHTML = "";

		TestProgramTabAp();
	};
	return (
		<div>
			<Grid container id="jacob">
				<Paper
					style={{
						padding: 20,

						width: "100%",
						textAlign: "center",
						color: "white",
						backgroundColor: "darkblue",
					}}>
					Livestock Programs
				</Paper>
				<Grid item xs={8}>
					<Grid container justify="flex-start">
						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									marginLeft: 5,
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={livestock}>
								Livestock
							</Paper>
						</Grid>

						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									marginLeft: 5,
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={test}>
								Test Programs
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default LivestockGrid;
