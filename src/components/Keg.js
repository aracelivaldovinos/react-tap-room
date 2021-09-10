import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {()=>props.whenKegClicked(props.id)}>
        <h5>{props.name}</h5>
        {/* <h5>{props.brand}</h5> */}
        <h5>{props.price}</h5>
        <h5>Pints: {this.state.pintsInKeg}</h5>
      </div>
      <button onClick = {()=>props.whenSellingPint(props.id)}>Sell</button>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  pints: PropTypes.number,
  whenKegClicked: PropTypes.func,
  id: PropTypes.string
}

export default Keg;