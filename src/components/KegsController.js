import React from "react";
import NewKegForm from "./NewKegForm";
import KegsList from "./KegsList";
import render from "dom-serializer";

class KegsController extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      formVisibleonPage: false
    };
  }

  render(){
    let currentlyVisibleState = null;
    if (this.state.formVisibleonPage) {
      currentlyVisibleState = <NewKegForm />
    }else{
      currentlyVisibleState = <KegsList />
    }

   return(
    <React.Fragment>
      {currentlyVisibleState}
    </React.Fragment>
  ); 
  }
  
}

export default KegsController;