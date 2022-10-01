import React, {useState} from "react";
import piggy from "../assets/porco.png";

const Nav = ({onGreaseChange, onClickSort}) => {
	const [greasy, setGreasy] = useState("All")

	function isTrue(statement){
		return statement === "yes" ? true : false
	}

	function handleGreaseChange(e){
		const greasiness = e.target.value === "All" ? "All" : isTrue(e.target.value) ;
		setGreasy(e.target.value);
		onGreaseChange(greasiness)
	}
	

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span><br/>
			<span id="filters">
			Greased?<select onChange={handleGreaseChange} value={greasy}>
				<option>All</option>
				<option>yes</option>
				<option>no</option>
			</select>
			Sort by:
			<button name = "name" onClick={onClickSort}>Name</button>
			<button name = "weight" onClick={onClickSort}>Weight</button>
			</span>
		</div>
	);
};

export default Nav;
