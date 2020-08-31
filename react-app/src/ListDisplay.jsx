import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Select from "react-select";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function CheckboxList() {
	const classes = useStyles();
	const [checked, setChecked] = React.useState([0]);

	const Programs = [
		{ label: "Form 2A: APES Yield Estimate for sampled Fruit Trees" },
		{ label: "Form 2" },
		{ label: "Form 3" },
		{ label: "Form 4" },
		{ label: "Form 5" },
		{ label: "Form 6" },
		{ label: "Form 7" },
		{ label: "Form 1A: APES Yield Estimate for sampled Fruit Trees" },
		{ label: "Form 8" },
		{ label: "Form 9" },
		{ label: "Form 10" },
		{ label: "Form 11" },
		{ label: "Form 12" },
		{ label: "Form 13" },
	];
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
			{Programs.map((value) => {
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

						<ListItemText id={labelId} secondary={`${value.label}`} 
						 />
						 
					</ListItem>
				);
			})}
		</List>
	);
}
