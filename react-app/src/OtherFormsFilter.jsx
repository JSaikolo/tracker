import React, { Component } from "react";

import Api from "./api";
//import TrackerCaptureApp from "./ComputerDept/TrackerCaptureApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuItem } from "@material-ui/core";

export default class AppFilter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			TrackerCapturePrograms: [],
            profilter: "APES",
            Apesfilter:"FORM",
		//	Cprograms: [],
		};
	}

	componentDidMount() {
		Api.getDashboards()

			/*
					{console(response.json()) })

			.then(responsedata => {
				console.log(responsedata);
                 return responsedata;
				
			})
			.then (data =>{ this.setState({ "TrackerCapturePrograms": data});})

			.catch((error) => {
				console.error("Error during data retrieval:", error);
			});

		}
		*/

			.then((response) => {
				/*
				let i = 0;
					for( i; i <response.programs.length;  i++) {
	 
						
						document.write(JSON.parse(response.programs[i]["displayName"])) ;
					};
				*/

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
					.includes(this.state.Apesfilter.toLowerCase()) &&
				!namep.displayName
					.toLowerCase()
					.includes(this.state.profilter.toLocaleLowerCase())
			)
				return namep;
			//console.log (namep)
		}) 
		.map(
			(namep) => (
				console.log(namep.displayName),
				<MenuItem key={namep.id}>{namep.displayName}</MenuItem>
			)
		);

		return <div>{<ul>{ProgramList}</ul>}</div>;
	}
}
