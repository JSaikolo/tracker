import React from "react";
import ApesTabsAVD from "../../ApesTabsAVD";
import CarryoverstocksTabsAVD from "./CarryoverstocksTabsAVD";
import HouseholdRegisterTabs from "./HouseholdRegisterTabs";
import { Grid, Paper } from "@material-ui/core";
import { render } from "@testing-library/react";

import AmisfilterTab from "./AmisfilterTab";

//import AppFilterAdv from "./AppFilterAdv";
import OtherProgramsfilterTab from "./OtherProgramsfilterTab";
import OtherProgramsfilter from "../../OtherProgramsfilter";

const style = {
	Paper: {
		padding: 20,
		marginTop: 50,
		width: "40%",
		height: 100,
		textAlign: "center",
		marginLeft: 20,
		cursor: "pointer",
		marginBottom: 10,
	},
};

//

function Apes() {
	render(
		<div>
			<ApesTabsAVD />
		</div>
	);
}

function Household() {
	render(
		<div>
			<HouseholdRegisterTabs />
		</div>
	);
}

function otherprogramTab() {
	render(
		<div>
			<OtherProgramsfilterTab />
		</div>
	);
}

function carryoverTab() {
	render(
		<div>
			<CarryoverstocksTabsAVD />
		</div>
	);
}

function AmisTab() {
	render(
		<div>
			<AmisfilterTab />
		</div>
	);
}

const ProgramGrid = () => {
	const ApesTab = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";

		Apes();
	};

	const HouseholdTab = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";
		Household();
	};

	const other = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";
		otherprogramTab();
	};

	const carryover = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";

		carryoverTab();
	};

	const amis = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";

		AmisTab();
	};

	return (
		<div>
			<Grid container id="saikolo">
				<Grid item sm={3}>
					<Paper style={style.Paper} onClick={ApesTab}>
						APES
					</Paper>
				</Grid>

				<Grid item sm={3}>
					<Paper
						style={{
							marginLeft: -150,
							marginBottom: 10,
							padding: 20,
							marginTop: 50,
							width: "40%",
							height: 100,
							textAlign: "center",
							cursor: "pointer",
						}}
						onClick={amis}>
						AMIS
					</Paper>
				</Grid>

				<Grid item sm={3}>
					<Paper
						style={{
							marginLeft: -300,
							marginBottom: 10,
							padding: 20,
							marginTop: 50,
							width: "40%",
							height: 100,
							textAlign: "center",
							cursor: "pointer",
						}}
						onClick={HouseholdTab}>
						Household Register
					</Paper>
				</Grid>

				<Grid item sm={3}>
					<Paper
						style={{
							marginLeft: -450,
							marginBottom: 10,
							padding: 20,
							marginTop: 50,
							width: "40%",
							height: 100,
							textAlign: "center",
							cursor: "pointer",
						}}
						onClick={carryover}>
						Carry Over Stocks
					</Paper>
				</Grid>

				<Grid item sm={3}>
					<Paper
						style={{
							marginLeft: 20,
							marginBottom: 10,
							padding: 20,
							marginTop: 50,
							width: "40%",
							height: 100,
							textAlign: "center",
							cursor: "pointer",
						}}
						onClick={other}>
						Other programs
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProgramGrid;
