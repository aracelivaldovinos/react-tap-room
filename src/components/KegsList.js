import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegsList(props){
  return(
    <React.Fragment>
      <hr/>
      {props.kegsList.map((keg) =>
        <Keg 
        whenKegClicked = {props.onKegSelection}
        whenSellClicked = {props.onKegSell}
        showPints = {props.pintsInKeg}
        name={keg.name} 
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor}
        id={keg.id}
        key={keg.id}/>
        
      )}
    </React.Fragment>
  );
}

KegsList.propTypes ={
  kegsList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegsList;