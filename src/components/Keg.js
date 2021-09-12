import React from "react";
import PropTypes from "prop-types";


function Keg(props){

  let message = null;
  let sellButton;
  
  if (props.pints !== 0){
      if (props.pints < 10){
      message = "Almost out!"
      }
    sellButton = <button onClick = {()=>props.whenSellClicked(props.id)}>Sell</button>  
  }else{
    message = "We are out stock!"
  }

  return(
    <React.Fragment>
      <div onClick = {()=>props.whenKegClicked(props.id)}>
        <h5>{props.name}</h5>
        <h5>{props.price}</h5>
        <h5>{props.pints}</h5>
      </div>
      {message} 
      <br/>
      {sellButton}
      <hr/>
    </React.Fragment>
    );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  pints: PropTypes.number,
  whenKegClicked: PropTypes.func,
  whenSellClicked: PropTypes.func,
  id: PropTypes.string
}

export default Keg;