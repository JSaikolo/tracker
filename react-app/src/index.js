import React from "react";
import ReactDOM from "react-dom";
import Appp from "./Appp";
import Api from "./api";
import Apu from "./Apu";
//import TrackerCaptureApp from "./ComputerDept/TrackerCaptureApp";
//import ProgramsJs from "./ProgramsData";
import DisplayPrograms from "./ComputerDept/ComponentsCR/DisplayPrograms";
import DisplayApesForms from "./ComputerDept/ComponentsCR/DisplayApesForms";
import ApesLivestockTile from "./ComputerDept/ComponentsCR/ApesLivestockTile";
import Tiles from "./ComputerDept/Tiles";
import ApesTabs from "./ApesTabs";
import ProgramsTesting from "./ComputerDept/ProgramsTesting";
import ProgramsGrid from "./ComputerDept/ComponentsCR/ProgramsGrid";
import AppFilter from "./AppFilter";
import CarryoverStocksPrograms from "./CarryoverStocksPrograms";
import OtherFormsFilter from "./OtherFormsFilter";
import Amisfilter from "./Amisfilter";
import ApesProgramsFilter from "./ApesProgramsFilter";
import ApesFormsFilter from "./ApesFormsFilter";
import AppFilterAdv from "./ComputerDept/ComponentsCR/AppFilterAdv";
import HouseRegister from "./HouseRegister";
import NewTiles from "./NewTiles";
import CarryoverstocksTabsAVD from "./ComputerDept/ComponentsCR/CarryoverstocksTabsAVD";
import ListDisplay from "./ListDisplay";
import ThemesTesting from "./ThemesTesting";

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
