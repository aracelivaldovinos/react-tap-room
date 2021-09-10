import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {()=>props.whenKegClicked(props.id)}>
        <h5>{props.name}</h5>
        <h5>{props.brand}</h5>
        <h5>{props.price}</h5>
        <h5>{props.flavor}</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  flavor: PropTypes.string,
  whenKegClicked: PropTypes.func,
  id: PropTypes.string
}

export default Keg;