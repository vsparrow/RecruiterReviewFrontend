//called by FirstPage.js
import React, { Component } from 'react';

class RecruiterNewForm extends Component {
state = { firstname: "", lastname: "", email: "", phonenumber: "", company: "", website: "", linkedin: "", location: ""}

handleChange = (event)=>{
  this.setState({[event.target.name]: event.target.value})
}

handleSubmit = (event)=>{
  // event.preventDefault() //not a submit , not a form.


  //handle dusplicated or error checking here: ********************************
  //handle empty fields ************************
  //

  //if checks ok post fetch
  this.submitRecruiter()
  //not needed? since componenet will be removed after submittal
  this.setState ({ firstname: "", lastname: "", email: "", phonenumber: "", company: "", website: "", linkedin: "", location: ""})
}

submitRecruiter = ()=>{
  //called by this.handleSubmit
  // let firstname = this.state.firstname
  // let lastname = this.state.lastname
  // let email = this.state.email
  // let phonenumber = this.state.phonenumber
  // let company = this.state.company
  // let website = this.state.website
  // let linkedin = this.state.linkedin
  // let location = this.state.location
  let url = this.props.state.url + "/recruiters"
  fetch(url, {
    method: 'post',
    headers: {'Content-type' : 'application/json', authorization: this.props.state.authorization},
    body: JSON.stringify({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      website: this.state.website,
      company: this.state.company,
      linkedin: this.state.linkedin,
      location: this.state.location,
      user_id: this.props.state.user_id
    })
  })//fetch
  .then(res=>res.json())
  // .then(json=>console.log(json))
  .then(json=>this.handleJSON(json))
}//submitRecruiter

handleJSON = (json)=>{
  console.log(json);
}

render(){
    // console.log(this.state);
    console.log("this.props");
    console.log(this.props);
    return(
    <div className="RecruiterNewForm">
      <h2>RecruiterNewForm</h2>
      <label htmlFor="firstname">First Name</label>
      <input type="text" name="firstname" value={this.state.firstname} placeholder="" onChange={this.handleChange}/>
      <label htmlFor="lastname">Last Name</label>
      <input type="text" name="lastname" value={this.state.lastname} placeholder="" onChange={this.handleChange}/>
      <br/>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" value={this.state.email} placeholder="" onChange={this.handleChange}/>
      <label htmlFor="phonenumber">Phone Number</label>
      <input type="text" name="phonenumber" value={this.state.phonenumber} placeholder="" onChange={this.handleChange}/>
      <br/>
      <label htmlFor="company">Company</label>
      <input type="text" name="company" value={this.state.company} placeholder="" onChange={this.handleChange}/>
      <label htmlFor="website">Website</label>
      <input type="text" name="website" value={this.state.website} placeholder="" onChange={this.handleChange}/>
      <br/>
      <label htmlFor="linkedin">Linkedin</label>
      <input type="text" name="linkedin" value={this.state.linkedin} placeholder="" onChange={this.handleChange}/>
      <label htmlFor="location">Location</label>
      <input type="text" name="location" value={this.state.location} placeholder="" onChange={this.handleChange}/>
      <br/>
      <button onClick={this.handleSubmit}>SUBMIT</button>
    </div>
  )
}
}
export default RecruiterNewForm

// firstname: string, lastname: string, email: string, phonenumber: string, is_generated: boolean,
//  website: string, company: string, linkedin: string, location:
// <label htmlFor=""></label>
// <input type="text" name="" value="" placeholder=""/>
