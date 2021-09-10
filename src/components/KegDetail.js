import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const { keg } = props;
  return(
    <React.Fragment>
      <h5>{props.name} Details:</h5>
      <h5>{props.brand}</h5>
      <h5>{props.price}</h5>
      <h5>{props.flavor}</h5>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail