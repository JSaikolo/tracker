import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { render } from "@testing-library/react";
import Select from "react-select";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Api from "../../api";
//import TrackerCaptureApp from "./ComputerDept/TrackerCaptureApp";
import "bootstrap/dist/css/bootstrap.min.css";

class AppFilterAdv extends Component {
	constructor(props) {
		super(props);

		this.state = {
			TrackerCapturePrograms: [],
			profilter: ["carry over", "carryover"],
			//Cprograms:[],
			filteredList: [],
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
	/*
	handleChange = (event) => {
		this.setState({ age: event.target.value });
	};
*/

	render() {
		const Tracker = this.state.TrackerCapturePrograms;

		const { profilter } = this.props;

		const ProgramList = Tracker.filter((namep) => {
			//console.log(namep.displayName);

			if (
				namep.displayName
					.toLowerCase()
					.includes(this.state.profilter[0].toLowerCase()) ||
				namep.displayName
					.toLowerCase()
					.includes(this.state.profilter[1].toLowerCase())
			)
				return namep;
			//console.log (namep)
		});
		/*.map((namep) => (
			//console.log(namep.displayName),

			<MenuItem key={namep.id}>{namep.displayName}</MenuItem>
		));
*/
		return (
			<div>
				
								{/*ProgramList.map((prog) => (
									<MenuItem key ={prog.id}> {prog.displayName}</MenuItem>
								)) */}


								
			</div>
		);
	}
}

export default AppFilterAdv;
