import React from "react";
import Keg from "./Keg"

function KegsList(){
  return(
    <React.Fragment>
      <Keg 
        name = "Tipsy Booch"
        brand = "Kosmic Kombucha"
        price = {10}
        flavor = "Lemon Ginger"
      />
      <Keg 
        name = "Tickling Tonic"
        brand = "Wild Kombucha"
        price = {8}
        flavor = "Mango Lime"
      />
    </React.Fragment>
  );
}

export default KegsList;