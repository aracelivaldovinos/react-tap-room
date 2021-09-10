import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegsList(props){
  return(
    <React.Fragment>
      <hr/>
      {props.kegsList.map((keg, index) =>
        <Keg name={keg.name} 
        brand={keg.brand}
        price={keg.price}
        flavor={keg.flavor}
        key={index}/>
      )}
    </React.Fragment>
  );
}

KegsList.propTypes ={
  kegsList: PropTypes.array
};

export default KegsList;