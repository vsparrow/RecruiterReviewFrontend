import React, { Component } from 'react';
import DisplayReviewsForSingleRec from './DisplayReviewsForSingleRec'

class DisplayRecruiterFull extends Component {

  render(){
    console.log(this.props.state);
    let recruiter=this.props.state.recruiters.find((r)=>{ return r.id === this.props.state.selectedRecruiterId})
    console.log(recruiter);
    return(
      <div className="DisplayRecruiterFull" >
        DisplayRecruiterFull
        <h2>{recruiter.firstname} {recruiter.lastname}</h2>
        <h3>{recruiter.email }</h3>
        <h3>{recruiter.phonenumber}</h3>
        <h3>{recruiter.linkedin}</h3>
        <h3>{recruiter.website}</h3>
        <h3>{recruiter.location}</h3>

        <DisplayReviewsForSingleRec state={this.props.state}/>
      </div>
    )
  }
}
export default DisplayRecruiterFull
