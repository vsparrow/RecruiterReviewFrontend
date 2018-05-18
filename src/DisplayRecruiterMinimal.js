import React, { Component } from 'react';

class DisplayRecruiterMinimal extends Component {
  handleClick = ()=>{
    // this.props.handleClickOnRec(this.props.index)
    this.props.handleClickOnRec(this.props.recruiter.id)
  }
  render(){
    console.log(this.props.recruiter);
    return(
      <div className="DisplayRecruiterMinimal" style={{borderStyle: "solid"}} onClick={this.handleClick}>
        DisplayRecruiterMinimal
        <h2>{this.props.recruiter.firstname} {this.props.recruiter.lastname}</h2>
        <h3>{this.props.recruiter.location}</h3>
      </div>
    )
  }
}
export default DisplayRecruiterMinimal
