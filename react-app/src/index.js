import React from "react";
import ReactDOM from "react-dom";

import Api from "./api";

import ProgramsGrid from "./ComputerDept/ComponentsCR/ProgramsGrid";
import ProgramsGridStndy from "./ComputerDept/ComponentsCR/ProgramsGridStndy";
const apiVersion = 30;
const developmentServer = "https://play.dhis2.org/2.29";
//const developmentServer = 'https://41.70.35.25/dhis';
const rootElement = document.getElementById("root");

const withBaseUrl = (baseUrl) => {
	Api.setConfig({
		baseUrl: `${baseUrl}/api`,
	});

	ReactDOM.render(
		<ProgramsGrid />,

		rootElement
	);
};

withBaseUrl(developmentServer);
