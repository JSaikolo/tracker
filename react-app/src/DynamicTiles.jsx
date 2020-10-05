import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

export default function DynamicTiles() {
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();
	const [interval] = React.useState([]);

	const handleChange = (event) => {
		setSpacing(Number(event.target.value));
	};
	for (var i = 0; i <= 47; i++) {}
	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={12}>
				<Grid container justify="flex-start" spacing={spacing}>
					{[...Array(10)].map((value, index) => (
						<Grid key={index} item>
							<Paper
								className={classes.paper}
								elevation={4}
								style={{
									marginLeft: 5,
									padding: 40,
									marginTop: 20,
									width: "150px",
									height: "150px",
									textAlign: "center",

									borderRadius: "10px",
									cursor: "pointer",
								}}>
								{" "}
								Tile
							</Paper>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
}
