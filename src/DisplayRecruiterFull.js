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
        <div className="wrapper-relatives">
          <img className="img-recruiter" src={ require('./placeholder.png') }/>
          <h1 style={{fontWeight: 800}}>{recruiter.firstname} {recruiter.lastname}</h1>
          <h2>{recruiter.company}</h2>
          <h3>{recruiter.email }</h3>
          <h3>{recruiter.phonenumber}</h3>
          <h3>{recruiter.linkedin}</h3>
          <h3>{recruiter.website}</h3>
          <h3>{recruiter.location}</h3>
        </div>
        <button className="btn btn-success btn-large" onClick={this.handleClick}>ADD REVIEW</button>

        {this.state.addReview ? <AddReview state={sendState} cancelReview={this.cancelReview} fetchRecruiters={this.props.fetchRecruiters}/> : <DisplayReviewsForSingleRec state={this.props.state}/>}
      </div>
    )
  }
}
export default DisplayRecruiterFull
