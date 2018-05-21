import React, { Component } from 'react';

class AddReview extends Component {
  state={recommended: false, interview: false, job: false}

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
    // if()
    else
    {this.setState({ [name]: value    })}
    // ,(name)=>{

      // else
    // });
  }

  render(){
    // console.log(this.props.state);
    console.log(this.state);
    return(
      <div className="AddReview" >
        <h2>NEW REVIEW</h2>
        RECOMMEND?<input name="recommended" type="checkbox" checked={this.state.recommended} onChange={this.handleInputChange} />
        <br/>GOT AN INTERVIEW?<input name="interview" type="checkbox" checked={this.state.interview} onChange={this.handleInputChange} />
        <br/>GOT AN JOB?<input name="job" type="checkbox" checked={this.state.job} onChange={this.handleInputChange} />
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
