// called by DisplayRecruiterFull
import React, { Component } from 'react';
import DisplayReviewsForSingleRec from './DisplayReviewsForSingleRec'
import AddReview from './AddReview'
class DisplayRecruiterFull extends Component {
  state = {addReview: false, average_rating: 0}

  handleClick = ()=>{
    this.setState({addReview: true})
  }

  cancelReview = ()=>{
    this.setState({addReview: false})
  }

  set_average_rating = (rating)=>{
    this.setState({average_rating: rating})
  }



  render(){
    let recruiter=this.props.state.recruiters.find((r)=>{ return r.id === this.props.state.selectedRecruiterId})
    let  sendState = {...this.state,...this.props.state}
    // console.log(recruiter);
    let stars = []
    // if(this.state.average_rating){
      for(let i=0;i<this.state.average_rating;i++){
        stars.push(<i key={i} className="fas fa-star"></i>)
      }
    // }
    return(
      <div className="DisplayRecruiterFull " >
        <div className="wrapper-relatives">
          <img className="img-recruiter" alt="Placeholder for recruiter"  src={ require('./placeholder.png') }/>
          <h1 style={{fontWeight: 800}}>{recruiter.firstname} {recruiter.lastname}</h1>
          <h2>{recruiter.company}</h2>
          <h3>{recruiter.email }</h3>
          <h3>{recruiter.phonenumber}</h3>
          <h3>{recruiter.linkedin}</h3>
          <h3>{recruiter.website}</h3>
          <h3>{recruiter.location}</h3>
          {this.state.average_rating > 0 ? <h3>Average Rating: {this.state.average_rating}</h3> : null}
          <span style={{fontSize: "2em"}}>{stars}</span>
        </div>
        <button className="btn btn-success btn-large" onClick={this.handleClick}>ADD REVIEW</button>

        {this.state.addReview ? <AddReview state={sendState} cancelReview={this.cancelReview} fetchRecruiters={this.props.fetchRecruiters}/> : <DisplayReviewsForSingleRec state={this.props.state} set_average_rating={this.set_average_rating}/>}
      </div>
    )
  }
}
export default DisplayRecruiterFull
