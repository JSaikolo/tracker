import React, { Component } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "./api";
import { render } from "@testing-library/react";
import AppFilterAdv from "./ComputerDept/ComponentsCR/AppFilterAdv";

/*const Programs = [

	{label : "Carryover"},
];


function Prog () {

render (
	

		<div> {<AppFilter />} </div>
	
);

}*/

const CarryoverStocksPrograms = (props) => {
	const [options, setOptions] = React.useState([1,2,3]);
	// options = props.optionProps,
	

	React.useEffect(()=>{
		
		
		setOptions({

			options :props.optionProps,
		}
			
		) 
		
	
	},[])
	

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-3"></div>
				<div className="col-md-6">
					<Select
						options={CarryoverStocksPrograms}
						className="mdb-select md-form"
						searchable=""
						placeholder="Select or Search"
						//onChange={(e)=>this.searchSpace(e)}
					/>
				</div>
				<div className="col-md-4"></div>
			</div>
		</div>
	);
};

export default CarryoverStocksPrograms;
