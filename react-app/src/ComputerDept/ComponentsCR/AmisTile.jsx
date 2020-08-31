import React, { useEffect } from "react";
import Amis from "./Amis";

import "./Apes.css";

function AmisTile() {
	function programs() {}
	return (
		<div>
			<div id="AmisTiles" onClick={programs()}>
				AMIS
			</div>
		</div>
	);
}

export default AmisTile;
