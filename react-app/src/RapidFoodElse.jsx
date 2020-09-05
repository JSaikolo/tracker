import React, { Component } from "react";
import Select from "react-select";
import Api from "./api";
import Button from "@material-ui/core/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import { useEffect, useState } from "react";

function RapidFoodElse() {
	const [TrackerCapturePrograms, setTracker] = useState([]);

	useEffect(() => {
		Api.getDashboards()

			.then((response) => {
				setTracker({
					TrackerCapturePrograms: response.programs,
				});
			})
			.catch((error) => {
				console.error("Error during data retrieval:", error);
			});
	}, []);

	const useStyles = makeStyles((theme) => ({
		root: {
			width: "100%",
			maxWidth: 360,
			backgroundColor: theme.palette.background.paper,
		},
	}));

	const Tracker = TrackerCapturePrograms;
	//console.log(Tracker);
	const ProgramList = Object.keys(Tracker).filter((namep) => {
		const na = Tracker[namep];
		console.log(na[22].attributeValues[0].value);

		if (Tracker[namep].attributeValues != null) {
			const name = Tracker[namep].attributeValues;
			//console.log(name);

			const namef = name.value;
			const profilter = "RFSA";

			if (namef.toLowerCase() === profilter.toLowerCase()) {
				return namep.name;
			}
		}
	});

	const classes = useStyles();
	const [checked, setChecked] = React.useState([0]);

	const handleToggle = (value) => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
	};

	return (
		<List className={classes.root}>
			{ProgramList.map((value) => {
				const labelId = `checkbox-list-label-${value}`;

				return (
					<ListItem
						key={value.label}
						role={undefined}
						dense
						button
						onClick={handleToggle(value.label)}>
						<Checkbox
							edge="start"
							checked={checked.indexOf(value.label) === 1}
							tabIndex={-1}
							disableRipple
							color="primary"
							inputProps={{ "aria-labelledby": labelId }}
						/>

						<ListItemText id={labelId} secondary={`${value.label}`} />
					</ListItem>
				);
			})}
		</List>
	);
}

export default RapidFoodElse;
