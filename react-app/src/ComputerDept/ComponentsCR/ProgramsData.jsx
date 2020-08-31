import React from "react";

function ProgramsJs() {
    
	async function getISS() {
		const api_url = "https://www.namis.org/namis1/api/programs.json";

		const response = fetch(api_url);

		const data = response.json();
		console.log(data);
	}

	return <div>{() => getISS()}</div>;
}

export { ProgramsJs };
