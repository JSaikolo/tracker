import React from "react";
//import DisplayPrograms from "./DisplayPrograms";
//import DisplayApesForms from "./DisplayApesForms";
import { Paper, Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { render } from "@testing-library/react";
import ApesFormsFilter from "./ApesFormsFilter";
import ApesProgramsFilter from "./ApesProgramsFilter";


export default (props) => (
	
	<Paper  style={{width:"100%"}}>
		<Tabs value={0} indicatorColor="primary" textColor="primary" style ={{marginLeft:"40%"}}>
			<Tab label="Apes Programs" onClick={ApesPrograms} />

			<Tab label="Apes Surveys -Forms" onClick={ApesForms} />
		</Tabs>
	</Paper>
);


function ApesPrograms() {
	render(
		<div>
			<ApesProgramsFilter />
		</div>
	);
}

function ApesForms() {
	render(
		<div>
			<ApesFormsFilter />
		</div>,
		[]
	);
}
