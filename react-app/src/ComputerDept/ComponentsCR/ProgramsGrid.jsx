import React from "react";
import LivestockGrid from "./LivestockGrid";
import CarryoverstocksTabsAVD from "./CarryoverstocksTabsAVD";
import HouseholdRegisterTabs from "./HouseholdRegisterTabs";
import { Grid, Paper } from "@material-ui/core";
import { render } from "@testing-library/react";

import PostHarvestTab from "./PostHarvestTab";
import RapidFoodTab from "./RapidFoodTab";
import LivestockTab from "./LivestockTab";
import OtherProgramsfilterTab from "./OtherProgramsfilterTab";
import AmisProTab from "./AmisProTab";

function Apes() {
	render(
		<div>
			<LivestockGrid />
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

function amisTab() {
	render(
		<div>
			<AmisProTab />
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

function livestock() {
	render(
		<div>
			<LivestockTab />
		</div>
	);
}

function postHarvest() {
	render(
		<div>
			<PostHarvestTab />
		</div>
	);
}

function rapidFood() {
	render(
		<div>
			<RapidFoodTab />
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

	const amis = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";
		amisTab();
	};

	const carryover = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";

		carryoverTab();
	};

	const livestockhld = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";

		livestock();
	};

	const postHarvesthld = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";

		postHarvest();
	};

	const rapidFoodhld = () => {
		var div = document.getElementById("saikolo");
		div.innerHTML = "";

		rapidFood();
	};

	return (
		<div>
			<Grid container id="saikolo">
				<Paper
					style={{
						padding: 20,

						width: "100%",
						textAlign: "center",
						color: "white",
						backgroundColor: "darkblue",
					}}>
					Tracker Capture Programs
				</Paper>
				<Grid item xs={8}>
					<Grid container justify="center">
						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									marginLeft: 2,
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={ApesTab}>
								APES
							</Paper>
						</Grid>

						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={HouseholdTab}>
								Household Register
							</Paper>
						</Grid>

						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={carryover}>
								Carryover Stocks
							</Paper>
						</Grid>

						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={livestockhld}>
								Livestock
							</Paper>
						</Grid>

						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									marginLeft: 2,
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={postHarvesthld}>
								Post Harvest
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={rapidFoodhld}>
								RFSA
							</Paper>
						</Grid>
						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={amis}>
								AMIS
							</Paper>
						</Grid>

						<Grid item xs={6} sm={3}>
							<Paper
								elevation={4}
								style={{
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}
								onClick={other}>
								Other Programs
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProgramGrid;
