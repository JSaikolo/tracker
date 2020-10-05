import React, { Component } from "react";
import LivestockGrid from "./LivestockGrid";
import CarryoverstocksTabsAVD from "./CarryoverstocksTabsAVD";
import HouseholdRegisterTabs from "./HouseholdRegisterTabs";
import { Grid, Paper } from "@material-ui/core";
import { render } from "@testing-library/react";
import Api from "../../api";
import PostHarvestTabTrial from "./PostHarvestTabTrial";
import RapidFoodTab from "./RapidFoodTab";
import LivestockTab from "./LivestockTab";
import OtherProgramsfilterTab from "./OtherProgramsfilterTab";
import AmisProTab from "./AmisProTab";
import Button from "@material-ui/core/Button";


function postHarvest() {
	render(
		<div>
			<PostHarvestTabTrial />
		</div>
	);
}


export default class ProgramGridStndy extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuIsOpen: true,
			TrackerCapturePrograms: [],

			isLoaded: false,
		};
	}

	componentDidMount() {
		Api.getDashboards()

			.then((response) => {
				this.setState({
					TrackerCapturePrograms: response.programs,
					isLoaded: true,
				});
			})
			.catch((error) => {
				console.error("Error during data retrieval:", error);
			});
	}
	
	render() {
		const Tracker = this.state.TrackerCapturePrograms;
		
		if (!this.state.isLoaded) {
			return (
				<div
					className="alert alert-primary"
					role="alert"
					style={{ textAlign: "center" }}>
					Loading...please wait!
				</div>
			);
		} else {
			const ProgramList = Tracker.filter((namep) => {
				if (namep.attributeValues[0] != null) {
					const name = namep.attributeValues;
					const namef = [...new Set(name)];
					return namef;
				}
			});

			const postHarvesthld = () => {
				var div = document.getElementById("saikolo");
				div.innerHTML = "";

				postHarvest();
			};

			return (
				<div>
					<Grid container id="saikolo">
						<Button
							variant="outlined"
							color="primary"
							size="large"
							onClick={() => window.location.reload()}>
							Back
						</Button>
						<Grid container style={{ flexGrow: 1 }} spacing={2}>
							<Grid item xs={12}>
								<Grid container justify="flex-start" spacing={2}>
									{ProgramList.map((prog, value) => (
										<Grid key={value} item>
											<Paper
												elevation={4}
												style={{
													marginLeft: 5,
													padding: 40,
													marginTop: 20,
													width: "200px",
													textAlign: "center",
													borderRadius: "10px",
													cursor: "pointer",
												}}
												onClick={postHarvesthld }>
												{(() => {
													if (prog.name.length !== 0) {
														return (
															<div key={value}>
																{prog.attributeValues[0].value}
															</div>
														);
													}
												})()}
											</Paper>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>

						{(() => {
							if (ProgramList.length === 0) {
								return (
									<div>
										<Paper
											elevation={0}
											style={{
												marginLeft: 5,
												padding: 40,
												marginTop: 5,
												textAlign: "center",
												fontSize: "large",
											}}>
											<hr className="my-4"></hr>
											<div className="alert alert-warning" role="alert">
												No programs currentry!
											</div>
										</Paper>
									</div>
								);
							}
						})()}
					</Grid>
				</div>
			);
		}
	}
}
