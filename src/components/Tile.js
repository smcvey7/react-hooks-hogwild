import React, {useState} from "react";

function Tile({pig}){
  const [showDetails, setShowDetails] = useState(false)

  const details = <div>
    <p>specialty: {pig.specialty}</p>
    <p>greased: {pig.greased ? "yes" : "no"}</p>
    <p>weight: {pig.weight}</p>
    <p>highest medal achieved: {pig["highest medal achieved"]}</p>
  </div>

  return(
    <div className="ui eight wide column">
      <h3>{pig.name}</h3>
      <img onClick={()=> setShowDetails(!showDetails)} src={pig.image} width="100%" alt={pig.name} ></img>
      {showDetails ? details : <p></p>}
    </div>
  )
}

export default Tile