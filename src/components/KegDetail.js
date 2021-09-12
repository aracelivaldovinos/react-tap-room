import React from "react";
import PropTypes from "prop-types";


function KegDetail(props){
  const { keg } = props;
  return(
    <React.Fragment>
      <h2>{keg.name} Details:</h2>
      <h3>Brand: {keg.brand} | Flavor: {keg.flavor}</h3>
      <h3>Price: ${keg.price}</h3>
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