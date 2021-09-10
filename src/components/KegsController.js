import React from "react";
import NewKegForm from "./NewKegForm";
import KegsList from "./KegsList";
import KegDetail from "./KegDetail";

class KegsController extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      formVisibleonPage: false,
      masterKegsList: [],
      selectedKeg: null
    };
  }
  handleClick= () => {
    if(this.state.selectedKeg !=null){
      this.setState({
        formVisibleonPage: false,
        selectedKeg: null
      });
    }else{
      this.setState(prevState => ({
        formVisibleonPage: !prevState.formVisibleonPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) =>{
    const newMasterKegsList = this.state.masterKegsList.concat(newKeg);
    this.setState({
      masterKegsList: newMasterKegsList, 
      formVisibleonPage: false,
      selectedKeg: null
    });
  }
  handleChangingSelectedKeg = (id) =>{
    const selectedKeg = this.state.masterKegsList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null){
      currentlyVisibleState = <KegDetail keg ={this.state.selectedKeg} />
      buttonText = "Return to kegs list"
    }
    else if (this.state.formVisibleonPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText = "Return to kegs list";
    }else{
      currentlyVisibleState = <KegsList kegsList={this.state.masterKegsList} onKegSelection={this.handleChangingSelectedKeg}/>
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