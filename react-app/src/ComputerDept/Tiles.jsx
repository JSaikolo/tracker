import React from "react";
import ApesCropsTile from "./ComponentsCR/ApesCropsTile";
import ApesLivestockTile from "./ComponentsCR/ApesLivestockTile";
import AmisTile from "./ComponentsCR/AmisTile";
import CarryOverStocksTile from "./ComponentsCR/CarryOverStocksTile";
import OtherTile from "./ComponentsCR/OtherTile";


function Tiles() {
	return (
		<div>
			<ApesCropsTile />
			<ApesLivestockTile />
			<AmisTile />
			<CarryOverStocksTile />
			<OtherTile />
		</div>
	);
}

export default Tiles;
