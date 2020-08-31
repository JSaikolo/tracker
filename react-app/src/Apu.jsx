import React, { useState, useEffect } from "react";

import Api from "./api";

function Apu() {
	const [TrackerCapturePrograms, setTrackerCapturePrograms] = useState([]);
	
	
	useEffect(() => {
		Api.getDashboards()
			.then((response) => {
				console.log(response);
				const data = Array.from(response)
				setTrackerCapturePrograms({TrackerCapturePrograms:data});
		return	TrackerCapturePrograms.map((program) => (<li>{program.displayName}</li>))
			})
			.catch((error) => {
				console.error("Error during data retrieval:", error);
			});
	}, []);
	

	return (
		<div>
			Program List
			{}
		</div>
	);
}

export default Apu;
