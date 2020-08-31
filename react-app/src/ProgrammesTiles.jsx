import React from "react";
import { Menu, MenuItem } from "@dhis2/ui-core";
import { useDataQuery } from "@dhis2/app-runtime";

const queryProg = {
	programs: {
		resource: "programs",

		attributes: { fields: ["id", "displayName"], paging: "false" },
	},
};

const ProgrammesTiles = () => {
	const { loading, error, data } = useDataQuery(queryProg);

	if (loading) {
		return <h6>Loading Programs</h6>;
	}
	if (error) {
		return <h6>Something wrong happened</h6>;
	}

	const programs = data.programs.programs;
	return (
		<Menu>
			{" "}
			{programs.map((program) => (
				<MenuItem key={programs.id} label={programs.displayName} />
			))}
		</Menu>
	);
};

export default ProgrammesTiles;
