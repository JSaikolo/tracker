import React, { Component } from "react";
import Select from "react-select";
import Api from "./api";
import Button from "@material-ui/core/Button";
//import TrackerCaptureApp from "./ComputerDept/TrackerCaptureApp";
import "bootstrap/dist/css/bootstrap.min.css";

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
		};
	}

	componentDidMount() {
		Api.getDashboards()

			.then((response) => {
				this.setState({
					TrackerCapturePrograms: response.programs,
				});
			})
			.catch((error) => {
				console.error("Error during data retrieval:", error);
			});
	}

	render() {
		const Tracker = this.state.TrackerCapturePrograms;

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

				//console.log(namef);

				if ((namef && namef.length) === 0) {
					return namep.name;
				}
			}
		});

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<Select
								options={ProgramList.map((prog) => ({
									label: prog.name,
								}))}
								menuIsOpen={this.state.menuIsOpen}
								onMenuClose={() => this.setState({ menuIsOpen: this.state.isClearable })}
								isClearable
								className="mdb-select md-form"
								searchable=""
								placeholder="Select or Search"
								//onChange={(e)=>this.searchSpace(e)}
							/>
						</div>
						<div className="col-md-4" />
					</div>
				</div>
				<Button
					variant="outlined"
					color="primary"
					size="large"
					onClick={() => window.location.reload()}>
					Back
				</Button>
			</div>
		);
	}
}
