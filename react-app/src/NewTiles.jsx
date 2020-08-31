import React from "react";
import { makeStyles, rgbToHex } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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

export default function NewTiles() {
	const [spacing, setSpacing] = React.useState(2);
	const classes = useStyles();

	/*const handleChange = (event) => {
		setSpacing(Number(event.target.value));
	};
*/

	return (
		<Grid container className={classes.root} spacing={2}>
			<Paper
				style={{
					padding: 20,

					width: "100%",
					textAlign: "center",
					color: "white",
					backgroundColor: "darkblue",
				}}>
				Tracker Capture Programs
			</Paper>
			<Grid item xs={8}>
				<Grid container justify="center" spacing={spacing}>
					<Grid item xs={6} sm={3}>
						<Paper
							elevation={4}
							style={{
								marginLeft:2,
								padding: 40,
								marginTop: 20,
								width: "150px",
								height: "150px",
								textAlign: "center",

								borderRadius: "10px",
								cursor: "pointer",
							}}>
							APES
						</Paper>
					</Grid>

					<Grid item xs={6} sm={3}>
						<Paper
							elevation={4}
							style={{
								padding: 40,
								marginTop: 20,
								width: "150px",
								height: "150px",
								textAlign: "center",

								borderRadius: "10px",
								cursor: "pointer",
							}}>
							AMIS
						</Paper>
					</Grid>

					<Grid item xs={6} sm={3}>
						<Paper
							elevation={4}
							style={{
								padding: 40,
								marginTop: 20,
								width: "150px",
								height: "150px",
								textAlign: "center",

								borderRadius: "10px",
								cursor: "pointer",
							}}>
							Household Register
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							elevation={4}
							style={{
								padding: 40,
								marginTop: 20,
								width: "150px",
								height: "150px",
								textAlign: "center",

								borderRadius: "10px",
								cursor: "pointer",
							}}>
							Other
						</Paper>
					</Grid>
				</Grid>
			</Grid>
			{/*
			<Grid item xs={12}>
				<Paper className={classes.control}>
					<Grid container>
						<Grid item>
							<FormLabel>spacing</FormLabel>
							<RadioGroup
								name="spacing"
								aria-label="spacing"
								value={spacing.toString()}
								onChange={handleChange}
								row>
								{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
									<FormControlLabel
										key={value}
										value={value.toString()}
										control={<Radio />}
										label={value.toString()}
									/>
								))}
							</RadioGroup>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
								*/}
		</Grid>
	);
}
