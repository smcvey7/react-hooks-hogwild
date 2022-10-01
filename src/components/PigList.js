import React from "react";
import Tile from "./Tile";

function PigList({ hogs, sort }){

  function compare(a, b){
    if (sort === "name"){
      const pigA = a.name.toUpperCase();
      const pigB = b.name.toUpperCase();

      let comparison = 0;
      if (pigA > pigB){
        comparison = 1;
      }else if (pigA < pigB){
        comparison = -1
      }
      return comparison

    }else {
      const pigA = a.weight;
      const pigB = b.weight;

      let comparison = 0;
      if (pigA > pigB){
        comparison = 1;
      }else if (pigA < pigB){
        comparison = -1
      }
      return comparison
    }
  }
  console.log("sorted hogs", hogs.sort(compare))

  return(
    <div className="ui grid container">
      {hogs.map((pig)=>{
      return <Tile key={pig.name} pig = {pig} />
    })}
    </div>
    
  )
}

export default PigList