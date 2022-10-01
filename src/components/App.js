import React, {useState} from "react";
import Nav from "./Nav";
import PigList from "./PigList";

import hogs from "../porkers_data";

function App() {
	const [piggies, setPiggies] = useState(hogs)
	const [sort, setSort] = useState("name")
	
	function handleGreaseChange(greasy){
		const filteredPiggies = hogs.filter((pig)=>{
			if (greasy === "All") return true;
			else return pig.greased === greasy
		})
		setPiggies(filteredPiggies)
	}

	return (
		<div className="App">
			<Nav onGreaseChange={handleGreaseChange} onClickSort={(e)=>{setSort(e.target.name)}} />
			<PigList sort={sort} hogs = {piggies}/>
		</div>
	);
}

export default App;
