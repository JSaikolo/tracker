import React, { Component } from "react";

import Api from "./api";
//import TrackerCaptureApp from "./ComputerDept/TrackerCaptureApp";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuItem } from "@material-ui/core";

export default class Appp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			TrackerCapturePrograms: [],
		};
	}

	componentDidMount() {
		Api.getDashboards()
			

			/*
					{console(response.json()) })

			.then(responsedata => {
				console.log(responsedata);
                 return responsedata;
				
			})
			.then (data =>{ this.setState({ "TrackerCapturePrograms": data});})

			.catch((error) => {
				console.error("Error during data retrieval:", error);
			});

		}
		*/

		
		.then((response) => {
		console.log(response);
				/*
				let i = 0;
					for( i; i <response.programs.length;  i++) {
	 
						
						document.write(JSON.parse(response.programs[i]["displayName"])) ;
					};
				*/	
	

    
				this.setState({ "TrackerCapturePrograms": response.programs
				
				});
				

				})
			.catch((error) => {
				console.error("Error during data retrieval:", error);
			});
		}

		

   render () {
			
				const Tracker = this.state.TrackerCapturePrograms;
				
				
				return (
					<div>
						
						{
							Tracker.map((program) => (
								<MenuItem key={program.id}>{program.displayName}</MenuItem>
							))}
					</div>
				);
							}
			
		}
		
	
			
	
