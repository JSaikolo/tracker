import React from "react";

import i18n from "@dhis2/d2-i18n";
import ProgrammesTiles from "./ProgrammesTiles";

const TrackerCaptureApp = () => (
	<div>
		<ProgrammesTiles />
		<style jsx>
			{" "}
			{`
				.container {
					width: 100%;
					height: 100%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justfy-content: center;
					font-size: 1rem;
				}
			`}
		</style>
	</div>
);

export default TrackerCaptureApp;
