import React, { Component } from "react";
import Select from "react-select";
import Api from "./api";
import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ApesGeneral extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuIsOpen: true,
			TrackerCapturePrograms: [],
			profilter: "Apes",
			livest: "livestock",
			test: "Test Programs",
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
				const name = namep.attributeValues[0];
				const namef = name.value;

				if (namep.attributeValues[1] != null) {
					const namea = namep.attributeValues[1].value;
					const namet = namep.attributeValues[1].value;

					if (namef.toLowerCase() === this.state.profilter.toLowerCase()) {
						if (!namea.toLowerCase() === this.state.livest.toLowerCase()) {
							return namep;
						} else if (!namet.toLowerCase() === this.state.test.toLowerCase()) {
							return namep;
						}
					}
				}
			}
		});

		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-2"></div>
						<div className="col-md-6">
							<Select
								options={ProgramList.map((prog) => ({
									label: prog.name,
								}))}
								menuIsOpen={this.state.menuIsOpen}
								onMenuClose={() =>
									this.setState({ menuIsOpen: this.state.isClearable })
								}
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
