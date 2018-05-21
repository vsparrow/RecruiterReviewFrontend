import React, { Component } from 'react';
import DisplayReviewsForSingleRec from './DisplayReviewsForSingleRec'
import AddReview from './AddReview'
class DisplayRecruiterFull extends Component {
  state = {addReview: false}

  handleClick = ()=>{
    // console.log(this.props.state);
    this.setState({addReview: true})
  }

  render(){

    let recruiter=this.props.state.recruiters.find((r)=>{ return r.id === this.props.state.selectedRecruiterId})
    let  sendState = {...this.state,...this.props.state}
    return(
      <div className="DisplayRecruiterFull" >
        DisplayRecruiterFull
        <h2>{recruiter.firstname} {recruiter.lastname}</h2>
        <h3>{recruiter.email }</h3>
        <h3>{recruiter.phonenumber}</h3>
        <h3>{recruiter.linkedin}</h3>
        <h3>{recruiter.website}</h3>
        <h3>{recruiter.location}</h3>
        <button onClick={this.handleClick}>ADD REVIEW</button>
        {this.state.addReview ? <AddReview state={sendState}/> : <DisplayReviewsForSingleRec state={this.props.state}/>}
      </div>
    )
  }
}
export default DisplayRecruiterFull
