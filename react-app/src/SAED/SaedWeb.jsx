import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./SaedCss.css";
import Services from "./SaedComponents/Services";
import { render } from "@testing-library/react";
import { link } from "react-router-dom";
import axios from "axios";

function SaedWEb() {
	const Title = () => {
		document.title = "SAED Consultants";
	};

	const handleConsult = () => {
		alert("We are offering Consulting Services in IT and Research fields");
	};

	const dafu = () => {
		return "./SAED/SaedComponents/Servicesjsx";
	};

	return (
		<body>
			<div id="Header">
				<h3>SAED IT AND RESEARCH CONSULTANCY</h3>
			</div>
			<div>
				{Title()}
				<table id="table">
					<tr>
						<th>
							{" "}
							<a href="./SAED/Home.jsx">Home {"  "}</a>
						</th>
						<th>
							{" "}
							<a href={"./SAED/About.jsx"}>About</a>{" "}
						</th>
						<th>
							<div onClick ={Services}><a href="{<Services />}">Services</a></div>
						</th>

						<th>
							<a href="./SAED/FrServices.jsx">Free Services</a>
						</th>
						<th onMouseMove={handleConsult}>
							{" "}
							<a href="./SaedLog.pjg">Consulting</a>
						</th>
						<th>
							{" "}
							<a href="./SaedLog.pjg">Trainings</a>
						</th>

						<th>
							<a href="./SAED/Contacts.jsx">Contacts</a>
						</th>
					</tr>
				</table>
			</div>

			<div class="main">
				<div id="image">
					<img src="D:/ReactJS/react-app/src/SAED/SaedLogo.png>" alt="" />

					<div id="sideContent">
						<p id="vis">Vision</p>
						<p id="vision">
							To become the Leading Consulting firm in IT and Research services
							by being customer centric in offering Consulting services.
						</p>
						<p id="mis">Mission</p>
						<p id="mission">
							Bridging the gap in IT and Research services by delivering the
							most outstanding services in accordance with client’s needs!!
						</p>
					</div>
				</div>
				<p id="backg">Background</p>
				<p id="saedBack">
					SAED is a newly established firm based in Zomba, Malawi. It was
					founded by two Pioneers from the University of Malawi (Chancellor
					College) after realizing the gap that exists in IT and Research
					Consulting services. It is irrefutable common knowledge that this is
					the era that demands more of digital services than analog, however
					this demands more professionalism and expertise. Besides that, true
					knowledge is thought to be best obtained by ethical researches which
					also need well-coordinated methodologies by great personalities with
					integrity. To conceal this technobabble, SAED is dedicated and
					committed in offering IT and Research Consulting Services with
					ultimate professionalism and expertise.
				</p>

				<p id="Aservices">Area of Services</p>
				<p id="services">
					<ul>
						<li>
							Research design, implementation and analysis(Qualitative and
							Quantitative)
						</li>
						<li> Participatory Research</li>

						<li>Data analytics</li>
						<li>Project management and technical assistance</li>
						<li>Monitoring, Evaluation, Research and Learning </li>
						<li>Proposal writing</li>
						<li>
							Training in Statistical packages(Excel, SPSS, STATA, R & Python)
						</li>
						<li>Design of Mobile Data Collection tools (CSPro, ODK, etc.)</li>
						<li>Web design and development</li>
						<li>
							{" "}
							Microsoft suite (Word, Excel, Access, Powerpoint and Outlook
						</li>
						<li>Software orientation and use</li>
						<li>Database development and management</li>
						<li>DHIS2 management</li>
						<li>Geo Information System (GIS) </li>
						<li>Networking Services</li>
						<li>Programming skills</li>
					</ul>
				</p>
			</div>
			<div id="Footer">
				{" "}
				Email: info.saed.co@gmail.com | @SAED, delivering the Outstanding
				Services |2020
			</div>
		</body>
	);
}

export default SaedWEb;
