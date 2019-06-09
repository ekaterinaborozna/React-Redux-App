import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
    
  render() {
    if (!this.props.payload){
    return ( 
        <div
            style={{ padding: "0px"}}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1" >
            <h6>Description of the task:</h6>
        <div className="breadcrumb" role="alert">Click on TODO for getting more information</div>
        </div>
        );        
    }
    return (
        <div
            style={{ padding: "0px" }}
            className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1" >
            <h3>Details:</h3>
        <div className="breadcrumb" role="alert">
           
        {this.props.payload.textinformation}
       </div>
       </div>
    );
  }
}

const mapStateToProps = state => { 
  return {  
    payload: state.activetodos 
 };
};

export default connect(mapStateToProps)(Details);

