import React from "react";
import PropTypes from "prop-types";


function Keg(props){

  let message = null;
  let sellButton;

  if (props.showPints === 0){
    message = "Out of Stock!"
  }
  else if (props.showPints < 10){
    message = "Almost out!"
    sellButton = <button onClick = {()=>props.whenSellClicked(props.id)}>Sell</button>
  }else{
    sellButton = <button onClick = {()=>props.whenSellClicked(props.id)}>Sell</button>
  }

  return(
    <React.Fragment>
      <div onClick = {()=>props.whenKegClicked(props.id)}>
        <h5>{props.name}</h5>
        <h5>{props.price}</h5>
      </div>
      {props.showPints}
      {message} 
      <br/>
      {sellButton}
      {/* <button onClick = {()=>props.whenSellClicked(props.id)}>Sell</button> */}
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
  whenSellClicked: PropTypes.func,
  id: PropTypes.string
}

export default Keg;