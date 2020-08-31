import React, { useEffect } from "react";
import CarryOverStocks from "../../CarryOverStocks";

import "./Apes.css";

function CarryOverStocksTile() {
	function programs() {}
	return (
		<div>
			<div id="CarryOverStocksTiles" onClick={programs()}>
				Carry Over Stocks
			</div>
		</div>
	);
}

export default CarryOverStocksTile;
