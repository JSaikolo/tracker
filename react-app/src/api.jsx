const basicAuth = "Basic " + btoa("jsaikolo:Saikolo@08");
const headers = new Headers({
	Authorization: basicAuth,
	"Content-type": "application/json",
	Accept: "application/json",
});

class Api {
	config = {
		baseUrl: "https://www.namis.org/namis1/api",
	};

	setConfig = (config) => {
		this.config = config;
	};

	getDashboards = () => {
		return fetch(
			`https://www.namis.org/namis1/api/programs.json?fields==id,name,attributeValues[value]`,
			{
				method: "GET",
				mode: "cors",
				credentials: "include",
				headers,
			}
		)
			.catch((error) => error)

			.then((response) => response.json());
	};
}

export default new Api();
