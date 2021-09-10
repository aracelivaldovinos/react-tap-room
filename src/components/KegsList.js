import React from "react";
import Keg from "./Keg"


const masterKegsList = [
  {
    name: "Tipsy Booch",
    brand: "Kosmic Kombucha",
    price: 10,
    flavor: "Lemon Ginger"
  },
  {
    name: "Tickling Tonic",
    brand:"Wild Kombucha",
    price: 8,
    flavor: "Mango Lime"

  }
]
function KegsList(){
  
  return(
    <React.Fragment>
      <hr/>
      {masterKegsList.map((keg, index) =>
        <Keg name={keg.name} 
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default KegsList;