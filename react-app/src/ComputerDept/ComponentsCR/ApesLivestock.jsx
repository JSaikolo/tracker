import React, { useState } from "react";
//import { Menu, MenuItem } from "@dhis2/ui-core/Menu";

import "./Apes.css";

function ApesLivestock() {
	const [programList, setProgramList] = useState([]);

	const programs = () => {
		setProgramList([
			...programList,
			{   id:"",
				programName: "",
			},
		]);
	};

	return (
		<div>
			<div id="ApesLivestock" onClick = {programs}>
				 Crops Programs
			</div>

 
			<ul>
				{programList.map((list) => (
					<li key={list.id}>{list.programName} </li>
				))}
			</ul>
		</div>
	);
}

export default ApesLivestock;
