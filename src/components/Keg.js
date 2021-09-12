import React from "react";
import PropTypes from "prop-types";


function Keg(props){

  // let message = null;
  // let sellButton;
  // let leftOverPints;

  // if (props.pints !== 0){
  //   leftOverPints = props.pints - 1 
  //     if (leftOverPints < 10){
  //     message = "Almost out!"
  //     }
  //   sellButton = <button onClick = {()=>props.whenSellClicked({
  //     name: props.name,
  //     brand: props.brand,
  //     price: props.price,
  //     flavor: props.flavor,
  //     pints: props.pints,
  //     id: props.id
  //   })}>Sell</button>;   
  // }else{
  //   message = "We are out stock!"
  // }

  return(
    <React.Fragment>
      <div onClick = {()=>props.whenKegClicked(props.id)}>
        <h5>{props.name}</h5>
        <h5>{props.price}</h5>
        {/* <h5>{leftOverPints} Pints</h5> */}
        <h5>{props.pints}</h5>
      </div>
      {/* {message}  */}
      <br/>
      {/* {sellButton} */}
  
      <button onClick = {()=>props.whenSellClicked(props.id)}>Sell</button>
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