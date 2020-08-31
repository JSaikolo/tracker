import React, { useEffect } from "react";
import ApesLivestock from "./ApesLivestock";

import "./Apes.css";

function ApesLivestockTile() {
	function programs() {}

	const styleC = {
		fill: "grey",
		stroke: "white",
		strokeWidth: "2px",
		fillOpacity: "0.1",
		strokeOpacity: "0.9",
	};
	return (
		<div>
			<div id="ApesLivestockTiles" onClick={programs()}>
				APES Livestock
			</div>

			<svg width="1050" height="500">
				<rect x="300" y="20" width="1000" height="450" style={styleC} />
			</svg>
		</div>
	);
}

export default ApesLivestockTile;
