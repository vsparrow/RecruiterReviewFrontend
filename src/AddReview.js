import React, { Component } from 'react';

class AddReview extends Component {
  state={recommended: false, interview: false, job: false, review: "",
    rating1: false,
    rating2: false,
    rating3: false,
    rating4: false,
    rating5: false,
    rating: null
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
    switch (event.target.name) {
      case "rating5":
        this.setState({rating1: true, rating2: true, rating3: true, rating4: true, rating5: true, rating: 5})
        break;
      case "rating4":
        this.setState({rating1: true, rating2: true, rating3: true, rating4: true, rating5: false, rating: 4})
        break;
      case "rating3":
        this.setState({rating1: true, rating2: true, rating3: true, rating4: false, rating5: false, rating: 3})
        break;
      case "rating2":
        this.setState({rating1: true, rating2: true, rating3: false, rating4: false, rating5: false, rating: 2})
        break;
      case "rating1":
        this.setState({rating1: true, rating2: false, rating3: false, rating4: false, rating5: false, rating: 1})
        break;
      default:

    }
  }

  handleSubmit = (event)=>{
    // console.log(event.target.name);
    // event.preventDefault();
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
        user_id: this.props.state.user_id,
        recruiter_id: this.props.state.selectedRecruiterId,
        review: this.state.review,
        got_interview: this.state.interview,
        got_job: this.state.job,
        recommended: this.state.recommended,
        rating: this.state.rating
      })
    })//fetch
    .then(res=>res.json())
    // .then(json=>console.log(json))
    .then(json=>this.handleJSON(json))
  }

  handleJSON = (json)=>{
    // console.log(json);
    // console.log(this.state);
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


        <div id="newrecform">
          <h2>Add A New Review</h2>
            <span style={{float: "left"}}>RECOMMEND?</span>
            <input style={{float: "right"}}name="recommended" type="checkbox" checked={this.state.recommended} onChange={this.handleInputChange} />
            <br/>
            <span style={{float: "left"}}>GOT AN INTERVIEW? </span>
            <input style={{float: "right"}}name="interview" type="checkbox" checked={this.state.interview} onChange={this.handleInputChange} />
            <br/>
            <span style={{float: "left"}}>GOT A JOB?</span>
            <input style={{float: "right"}} name="job" type="checkbox" checked={this.state.job} onChange={this.handleInputChange} />
            <br/>
            <div>
              <fieldset className="rating">
                  <legend>Please rate:</legend>
                  <input type="radio" style={{marginRight: ".5em"}} id="star1" name="rating1" value={this.state.rating1} checked={this.state.rating1} onClick={this.handleRating}/><label style={{marginRight: "1em"}} htmlFor="star1" title="Sucks big time">1</label>
                  <input type="radio" style={{marginRight: ".5em"}} id="star2" name="rating2" value={this.state.rating2} checked={this.state.rating2} onClick={this.handleRating}/><label style={{marginRight: "1em"}} htmlFor="star2" title="Kinda bad">2</label>
                  <input type="radio" style={{marginRight: ".5em"}} id="star3" name="rating3" value={this.state.rating3} checked={this.state.rating3} onClick={this.handleRating}/><label style={{marginRight: "1em"}} htmlFor="star3" title="Meh">3</label>
                  <input type="radio" style={{marginRight: ".5em"}} id="star4" name="rating4" value={this.state.rating4} checked={this.state.rating4} onClick={this.handleRating}/><label style={{marginRight: "1em"}} htmlFor="star4" title="Pretty good">4</label>
                  <input type="radio" style={{marginRight: ".5em"}} id="star5" name="rating5" value={this.state.rating5} checked={this.state.rating5} onClick={this.handleRating}/><label style={{marginRight: "1em"}} htmlFor="star5" title="Rocks!">5</label>
              </fieldset>
            </div>
           <div className="form-group">
              <label  htmlFor="review">Review</label>
              <br />
              <div className="input-group">
              <textarea rows="4" cols="60" value={this.state.review} name="review" onChange={this.handleInputChange}/>
               {this.state.reviewShort ? note : null}
              </div>
           </div>
           <button  onClick={this.handleSubmit} name="submit" className="btn btn-default">Submit</button>
           <button  onClick={this.handleSubmit} name="cancel" className="btn btn-default">Cancel </button>
         </div>

      </div>
    )
  }
}
export default AddReview


// <h2>NEW REVIEW</h2>
//
//
// <br/>
//
//
// <br/>
// <textarea rows="4" cols="60" value={this.state.review} name="review" onChange={this.handleInputChange}/>
// <br/>
// <br/>
//
// <br/>
//
// <button onClick={this.handleSubmit} name="submit" >Submit</button>
// <button onClick={this.handleSubmit} name="cancel">Cancel</button>
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
