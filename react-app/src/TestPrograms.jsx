import React, { Component } from "react";
import Select from "react-select";
import Api from "./api";
import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default class TestPrograms extends Component {
	constructor(props) {
		super(props);

		this.state = {
			TrackerCapturePrograms: [],
			profilter: "Test Programs",
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

		// console.log (Tracker)
		const ProgramList = Tracker.filter((namep) => {
			if (namep.attributeValues[0] != null) {
				const name = namep.attributeValues[0];
				//console.log(name.value);
				const namef = name.value;

				if (namef.toLowerCase() === this.state.profilter.toLowerCase()) {
					return namep.name;
				}
			}
		});

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<Select
								options={ProgramList.map((prog) => ({
									label: prog.name,
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

				<Button
					id="jack"
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
