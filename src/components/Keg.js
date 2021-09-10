import React from "react";

function Keg(props){
  return(
    <React.Fragment>
      <h5>{props.name}</h5>
      <h5>{props.brand}</h5>
      <h5>{props.price}</h5>
      <h5>{props.flavor}</h5>
      <hr/>
    </React.Fragment>
  );
}

export default Keg;