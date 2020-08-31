import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ProgramsGrid from "./ProgramsGrid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { render } from "@testing-library/react";

import OtherProgramsfilter from "../../OtherProgramsfilter";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div>
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}>
				{value === index && (
					<Box p={3}>
						<Typography component={"div"}>{children}</Typography>
					</Box>
				)}
			</div>
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

export default function OtherProgramsfilterTab() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
					style={{ marginLeft: "30%" }}>
					<Tab label="List of Other Programs " {...a11yProps(0)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<OtherProgramsfilter />
			</TabPanel>
		</div>
	);
}
