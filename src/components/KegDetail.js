import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const { keg, pintsInKeg } = props;
  return(
    <React.Fragment>
      <h5>{keg.name} Details:</h5>
      <h5>{keg.brand}</h5>
      <h5>{keg.price}</h5>
      <h5>{keg.flavor}</h5>
      {pintsInKeg}
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail