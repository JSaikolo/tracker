import {Component,React} from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/core/Icon";
import CheckBoxIcon from "@material-ui/core/Icon";
import Favorite from "@material-ui/core/icon";
import FavoriteBorder from "@material-ui/core/IconButton";
import Api from "./api";

export default class RapidFood extends Component {
	constructor(props) {
		super(props);

		this.state = {
			TrackerCapturePrograms: [],
			profilter: "RFSA",
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
		<FormGroup row>
			<FormControlLabel
				control={
					<Checkbox
						
					/>
				}
				{...ProgramList.map((prog) => ({
					label: prog.name,
				}))}
			/>
		</FormGroup>
	);
}
}