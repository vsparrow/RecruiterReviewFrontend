import React, { Component } from 'react';

class AddReview extends Component {
  state={recommended: false, interview: false, job: false, review: "",
    rating1: false,
    rating2: false,
    rating3: false,
    rating4: false,
    rating5: false
  }

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

  handleRating = (event)=>{
    // console.log(event.target.value);
    console.log(event.target.name); //rating4
    // console.log(event.target.checked);
    // console.log(this.state);
    switch (event.target.name) {
      case "rating5":
        this.setState({rating1: true, rating2: true, rating3: true, rating4: true, rating5: true})
        break;
      case "rating4":
        this.setState({rating1: true, rating2: true, rating3: true, rating4: true, rating5: false})
        break;
      case "rating3":
        this.setState({rating1: true, rating2: true, rating3: true, rating4: false, rating5: false})
        break;
      case "rating2":
        this.setState({rating1: true, rating2: true, rating3: false, rating4: false, rating5: false})
        break;
      case "rating1":
        this.setState({rating1: true, rating2: false, rating3: false, rating4: false, rating5: false})
        break;
      default:

    }
  }

  handleSubmit = (event)=>{
    // console.log(event.target.name);
    console.log(this.props);
    if (event.target.name === "cancel") { this.props.cancelReview()}
    if (event.target.name === "submit") {
      // if(this.state.review.length < 15){alert("Review too short. Thank you")}
      if(this.state.review.length < 15){this.setState({reviewShort: true})}
      else {this.submitReview()}
    }
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
    // console.log(this.state);
    let note = <span style={{color: "red"}}>*Review must be 15 characters or more to submit</span>
    return(
      <div className="AddReview" >
        <h2>NEW REVIEW</h2>
        RECOMMEND?<input name="recommended" type="checkbox" checked={this.state.recommended} onChange={this.handleInputChange} />
        <br/>GOT AN INTERVIEW?<input name="interview" type="checkbox" checked={this.state.interview} onChange={this.handleInputChange} />
        <br/>GOT AN JOB?<input name="job" type="checkbox" checked={this.state.job} onChange={this.handleInputChange} />
        <br/>
        <div>
        <fieldset className="rating">
            <legend>Please rate:</legend>
            <input type="radio" id="star1" name="rating1" value={this.state.rating1} checked={this.state.rating1 === true} onClick={this.handleRating}/><label htmlFor="star1" title="Sucks big time">1 star</label>
            <input type="radio" id="star2" name="rating2" value={this.state.rating2} checked={this.state.rating2} onClick={this.handleRating}/><label htmlFor="star2" title="Kinda bad">2 stars</label>
            <input type="radio" id="star3" name="rating3" value={this.state.rating3} checked={this.state.rating3} onClick={this.handleRating}/><label htmlFor="star3" title="Meh">3 stars</label>
            <input type="radio" id="star4" name="rating4" value={this.state.rating4} checked={this.state.rating4} onClick={this.handleRating}/><label htmlFor="star4" title="Pretty good">4 stars</label>
            <input type="radio" id="star5" name="rating5" value={this.state.rating5} checked={this.state.rating5} onClick={this.handleRating}/><label htmlFor="star5" title="Rocks!">5 stars</label>
        </fieldset>
        </div>

        <br/>
        <textarea rows="4" cols="60" value={this.state.review} name="review" onChange={this.handleInputChange}/>
        <br/>
        <br/>
        {this.state.reviewShort ? note : null}
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
