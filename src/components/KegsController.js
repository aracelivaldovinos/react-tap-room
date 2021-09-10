import React from "react";
import NewKegForm from "./NewKegForm";
import KegsList from "./KegsList";
import render from "dom-serializer";

class KegsController extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      formVisibleonPage: false,
      masterKegsList = []
    };
  }
  handleClick= () => {
    this.setState(prevState => ({
      formVisibleonPage: !prevState.formVisibleonPage
    }));
  }

  handleAddingNewKegToList = (newKeg) =>{
    const newMasterKegsList = this.state.masterKegsList.concat(newKeg);
    this.setState({
      masterKegsList: newMasterKegsList, 
      formVisibleonPage: false,
      selectedKeg = null
    });
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleonPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.state.handleAddingNewKegToList}/>
      buttonText = "Return to kegs list";
    }else{
      currentlyVisibleState = <KegsList kegsList={this.state.masterKegsList}/>
      buttonText = "Add keg"
    }

   return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  ); 
  }
  
}

export default KegsController;