// called by DisplayRecruiters
import React, { Component } from 'react';

class DisplayRecruiterMinimal extends Component {
  handleClick = ()=>{
    // this.props.handleClickOnRec(this.props.index)
    this.props.handleClickOnRec(this.props.recruiter.id)
  }
  render(){
    console.log(this.props.recruiter);
    return(
      <div className="DisplayRecruiterMinimal wrapper-relatives" style={{borderStyle: "solid",clear: "both" }} onClick={this.handleClick}>
        <img src={ require('./placeholder.png') }/>
        <div className="" style={{float: "none", overflow: "hidden"}}>
        <h2>{this.props.recruiter.firstname} {this.props.recruiter.lastname}</h2>
        <h3>{this.props.recruiter.location}</h3>
        </div>
      </div>
    )
  }
}
export default DisplayRecruiterMinimal
 // style="clear: both;"
