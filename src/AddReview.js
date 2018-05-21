import React, { Component } from 'react';

class AddReview extends Component {
  state={recommended: false, interview: false, job: false, review: ""}

  handleInputChange = (event)=>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if(name === "job" ) {
      if(value === true){this.setState({job: true, interview: true})}
      if(value === false){this.setState({job: false})}
    }
    else if(name === "interview" ) {
      if(value === true){this.setState({interview: true})}
      if(value === false){this.setState({job: false, interview: false})}
    }
    else
    {this.setState({ [name]: value    })}
  }

  handleSubmit = (event)=>{
    // console.log(event.target.name);
    console.log(this.props);
    if (event.target.name === "cancel") { this.props.cancelReview()}
    if (event.target.name === "submit") { this.submitReview()}
  }

  submitReview=()=>{
    let url = "http://127.0.0.1:3000/reviews"
    fetch(url, {
      method: 'post',
      headers: {'Content-type' : 'application/json', authorization: this.props.state.authorization},
      body: JSON.stringify({
        user_id: 1, //change this
        recruiter_id: this.props.state.selectedRecruiterId,
        review: this.state.review,
        got_interview: this.state.interview,
        got_job: this.state.job,
        recommended: this.state.recommended,

      })
    })//fetch
    .then(res=>res.json())
    // .then(json=>console.log(json))
    .then(json=>this.handleJSON(json))
  }

  handleJSON = (json)=>{
    console.log(json);
    console.log(this.state);
    if(json["POSTED REVIEW"]){
      //submit was successful
      //do some action
      // console.log(json);
      console.log("POSTED REVIEW success");
      this.props.fetchRecruiters()
      this.props.cancelReview()
    }
    else {
      console.log("POSTED REVIEW not found");
    }
  }
  // user_id: user.id,
  // recruiter_id: recruiter.id,
  // review: review,
  // got_interview:  got_interview,
  // got_job:  got_job,
  // rating: rating,
  // recommended: recommended,
  // ghoster:  ghoster

  render(){
    // console.log(this.props.state);
    // console.log(this.props);
    console.log(this.state);
    return(
      <div className="AddReview" >
        <h2>NEW REVIEW</h2>
        RECOMMEND?<input name="recommended" type="checkbox" checked={this.state.recommended} onChange={this.handleInputChange} />
        <br/>GOT AN INTERVIEW?<input name="interview" type="checkbox" checked={this.state.interview} onChange={this.handleInputChange} />
        <br/>GOT AN JOB?<input name="job" type="checkbox" checked={this.state.job} onChange={this.handleInputChange} />
        <br/>
        <textarea rows="4" cols="60" value={this.state.review} name="review" onChange={this.handleInputChange}/>
        <br/>
        <button onClick={this.handleSubmit} name="submit" >Submit</button>
        <button onClick={this.handleSubmit} name="cancel">Cancel</button>
      </div>
    )
  }
}
export default AddReview
  //
  // user_id: 1,
  //  recruiter_id: 2,
  //  review: "Grab pompom in mouth and put in water dish flee in...",
  //   got_interview: false,
  //   got_job: false,
  //    rating: 0,
  //    is_generated: nil,
  //    recommended: false,
  //    ghoster: false,
