import React, { Component } from "react";

import Api from "../../api";
const updatedComponent = (originalComponent) => {
	class ProgramGridStndy extends Component {
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

					ProgramList.map((prog, value) => () => {
						if (prog.name.length !== 0) {
							return <div key={value}>{prog.attributeValues[0].value}</div>;
						}
					});
				});
			}

			return <div>{<originalComponent progdata= {this.ProgramList}/>}</div>;
		}
	}

	return ProgramGridStndy;
};

export default updatedComponent;
