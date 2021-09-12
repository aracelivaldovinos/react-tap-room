import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const { keg } = props;
  return(
    <React.Fragment>
      <h5>{keg.name} Details:</h5>
      <h5>{keg.brand}</h5>
      <h5>{keg.price}</h5>
      <h5>{keg.flavor}</h5>
      <hr/>
      <button onClick={()=> props.onClickingDelete(keg.id)}>Delete</button>
      <button onClick={ props.onClickingEdit }>Update</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail