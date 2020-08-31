import React, { Component } from "react";
import Select from "react-select";
import Api from "./api";
//import TrackerCaptureApp from "./ComputerDept/TrackerCaptureApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuItem } from "@material-ui/core";

export default class ApesFormsFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			TrackerCapturePrograms: [],
			profilter: "APES",
			Apesfilter: "FORM",
			//	Cprograms: [],
		};
	}

	componentDidMount() {
		Api.getDashboards()

			.then((response) => {
				this.setState({ TrackerCapturePrograms: response.programs });
			})
			.catch((error) => {
				console.error("Error during data retrieval:", error);
			});
	}

	render() {
		const Tracker = this.state.TrackerCapturePrograms;
		const { Apesfilter, profilter } = this.props;

		const ProgramList = Tracker.filter((namep) => {
			// console.log (namep.displayName)

			if (
				namep.displayName
					.toLowerCase()
					.includes(this.state.profilter.toLowerCase())
			) {
				if (
					namep.displayName
						.toLowerCase()
						.includes(this.state.Apesfilter.toLocaleLowerCase())
				) {
					return namep;
				}
			}

			//console.log (namep)
		});

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<Select
								options={ProgramList.map((prog) => ({
									label: prog.displayName,
								}))}
								isClearable
								className="mdb-select md-form"
								searchable=""
								placeholder="Select or Search"
								//onChange={(e)=>this.searchSpace(e)}
							/>
						</div>
						<div className="col-md-4"></div>
					</div>
				</div>
			</div>
		);
	}
}
