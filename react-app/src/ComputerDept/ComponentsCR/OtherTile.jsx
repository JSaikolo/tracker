import React, { useEffect } from "react";
import Other from "./Other";

import "./Apes.css";

function OtherTile() {
	function programs() {}
	return (
		<div>
			<div id="OtherTiles" onClick={programs()}>
				Other
			</div>
		</div>
	);
}

export default OtherTile;
