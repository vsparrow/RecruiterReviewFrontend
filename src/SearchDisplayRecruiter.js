// called by SearchDisplay
import React, { Component } from 'react';

class SearchDisplayRecruiter extends Component {

  handleClick = (event)=>{
    event.preventDefault();
    this.props.setSomeState("selectedRecruiterId", this.props.recruiter.id)
  }

  render(){
    let recruiter = this.props.recruiter
    return(
      <div>
        <div className="SearchDisplayRecruiter wrapper-relatives" style={{borderStyle: "solid",clear: "both" }} onClick={this.handleClick} >
         <img className="img-recruiters" alt="Placeholder for recruiter"  src={ require('./placeholder.png') }/>
         <div className="" style={{float: "none", overflow: "hidden"}}>
         <h2>{recruiter.firstname} {recruiter.lastname}</h2>
         <h3>{recruiter.location}</h3>
         <h4>Term found in: {recruiter.foundterm} : <span style={{backgroundColor: "yellow"}}>{recruiter[recruiter.foundterm]}</span></h4>
         </div>
       </div>
      </div>
    )
  }
}
export default SearchDisplayRecruiter
