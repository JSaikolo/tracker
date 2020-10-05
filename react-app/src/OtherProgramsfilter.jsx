import React, { Component } from "react";
import Select from "react-select";
import Api from "./api";
import Button from "@material-ui/core/Button";
//import TrackerCaptureApp from "./ComputerDept/TrackerCaptureApp";
import "bootstrap/dist/css/bootstrap.min.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default class OtherProgramsfilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuIsOpen: true,
			TrackerCapturePrograms: [],
			profilter: "Apes",
			carryover: "Carryover Stocks",
			rapidf: "RFSA",
			livest: "Livestock",
			househ: "HouseHold Register",
			testp: "Test Programs",
			posth: "Post Harvest",
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
					Loading... Please wait!
				</div>
			);
		} else {
			const ProgramList = Tracker.filter((namep) => {
				if (namep.attributeValues[0] != null) {
					const namef = namep.attributeValues[0].value;

					if (
						!(namef.toLowerCase() === this.state.profilter.toLowerCase()) &&
						!(namef.toLowerCase() === this.state.househ.toLowerCase()) &&
						!(namef.toLowerCase() === this.state.rapidf.toLowerCase()) &&
						!(namef.toLowerCase() === this.state.posth.toLowerCase()) &&
						!(namef.toLowerCase() === this.state.carryover.toLowerCase()) &&
						!(namef.toLowerCase() === this.state.testp.toLowerCase()) &&
						!(namef.toLowerCase() === this.state.livest.toLowerCase())
					) {
						return namep.name;
					}
				}

				if (namep.attributeValues != null) {
					const namef = namep.attributeValues;

					if ((namef && namef.length) === 0) {
						return namep.name;
					}
				}
			});

			return (
				<div>
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
											}}>
											{(() => {
												if (prog.name.length !== 0) {
													return <div>{prog.name}</div>;
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
				</div>
			);
		}
	}
}
