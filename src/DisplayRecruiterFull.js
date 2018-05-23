// called by DisplayRecruiterFull
import React, { Component } from 'react';
import DisplayReviewsForSingleRec from './DisplayReviewsForSingleRec'
import AddReview from './AddReview'
class DisplayRecruiterFull extends Component {
  state = {addReview: false}

  handleClick = ()=>{
    this.setState({addReview: true})
  }

  cancelReview = ()=>{
    this.setState({addReview: false})
  }

  render(){

    let recruiter=this.props.state.recruiters.find((r)=>{ return r.id === this.props.state.selectedRecruiterId})
    let  sendState = {...this.state,...this.props.state}
    return(
      <div className="DisplayRecruiterFull " >
        DisplayRecruiterFull
        <div className="wrapper-relatives">
        <img className="img-recruiter" src={ require('./placeholder.png') }/>
        <h2>{recruiter.firstname} {recruiter.lastname}</h2>
        <h3>{recruiter.email }</h3>
        <h3>{recruiter.phonenumber}</h3>
        <h3>{recruiter.linkedin}</h3>
        <h3>{recruiter.website}</h3>
        <h3>{recruiter.location}</h3>
        </div>
        <button onClick={this.handleClick}>ADD REVIEW</button>

        {this.state.addReview ? <AddReview state={sendState} cancelReview={this.cancelReview} fetchRecruiters={this.props.fetchRecruiters}/> : <DisplayReviewsForSingleRec state={this.props.state}/>}
      </div>
    )
  }
}
export default DisplayRecruiterFull
