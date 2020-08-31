import React, { useState } from "react";
//import { Menu, MenuItem } from "@dhis2/ui-core/Menu";

import "./Apes.css";

function Amis() {
	const [programList, setProgramList] = useState([]);

	const programs = () => {
		setProgramList([
			...programList,
			{
				id: "",
				programName: [
					"Form 2A: APES Yield Estimate for sampled Fruit Trees",
					"APES EPA Total Area and Production for Vegetable",
				],
			},
		]);
	};

	return (
		<div>
			<div id="Amis" onClick={programs}>
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

export default Amis;
