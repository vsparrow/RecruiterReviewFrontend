//called by FirstPage.js
import React, { Component } from 'react';

class RecruiterNewForm extends Component {
state = { firstname: "", lastname: "", email: "", phonenumber: "", company: "", website: "", linkedin: "", location: ""}

handleChange = (event)=>{
  this.setState({[event.target.name]: event.target.value})
}

handleSubmit = (event)=>{
  event.preventDefault() //not a submit , not a form.


  //if checks ok post fetch
  this.submitRecruiter()
  //not needed? since componenet will be removed after submittal
  // this.setState ({ firstname: "", lastname: "", email: "", phonenumber: "", company: "", website: "", linkedin: "", location: ""})
}

//called by handleSubmit
submitRecruiter = ()=>{

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
      user_id: this.props.state.user_id //should be able to remove this
    })
  })//fetch
  .then(res=>res.json())
  .then(json=>this.handleJSON(json))
}//submitRecruiter

handleJSON = (json)=>{
  if(json.recruiter_id)//means successful creation
  {
    //create a new recruiter object and push it into top state.recruiters
    let recruiter_obj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber: this.state.phonenumber,
      website: this.state.website,
      company: this.state.company,
      linkedin: this.state.linkedin,
      location: this.state.location,
      id: json.recruiter_id
    }
    this.props.addToRecruiters([...this.props.state.recruiters, recruiter_obj], json.recruiter_id )
  }//if
}

render(){
    //LEAVING both website and linkedin as text, not type="url" if we make it url an error message will pop up if
    // site not start with http:// or some uri but wont tell user either
    return(
    <div className="RecruiterNewForm">
      <form id="newrecform" onSubmit={this.handleSubmit}>
        <h2>Add A New Recruiter</h2>
         <div className="form-group">
            <label  htmlFor="firstname">First Name</label>
            <br />
            <div className="input-group">
               <input type="text" name="firstname" value={this.state.firstname} placeholder="Enter first name" onChange={this.handleChange} required/>
            </div>
         </div>
         <div className="form-group">
            <label  htmlFor="lastname">Last Name</label>
            <br />
            <div className="input-group">
               <input type="text" name="lastname" value={this.state.lastname } placeholder="Enter last name" onChange={this.handleChange} required/>
            </div>
         </div>
         <div className="form-group">
            <label  htmlFor="email">Email Address</label>
            <br />
            <div className="input-group">
               <input type="text" name="email" value={this.state.email } placeholder="Enter email address" onChange={this.handleChange} required/>
            </div>
         </div>
         <div className="form-group">
            <label  htmlFor="phonenumber">Phone Number</label>
            <br />
            <div className="input-group">
               <input type="text" name="phonenumber" value={this.state.phonenumber } placeholder="Enter phone number" onChange={this.handleChange} />
            </div>
         </div>
         <div className="form-group">
            <label  htmlFor="company">Company</label>
            <br />
            <div className="input-group">
               <input type="text" name="company" value={this.state.company } placeholder="Enter company name" onChange={this.handleChange} />
            </div>
         </div>
         <div className="form-group">
            <label  htmlFor="website">Website Address</label>
            <br />
            <div className="input-group">
               <input type="text" name="website" value={this.state.website } placeholder="Enter website address" onChange={this.handleChange} />
            </div>
         </div>
         <div className="form-group">
            <label  htmlFor="linkedin">Linkedin Address</label>
            <br />
            <div className="input-group">
               <input type="text" name="linkedin" value={this.state.linkedin } placeholder="Enter linkedin address" onChange={this.handleChange} />
            </div>
         </div>
         <div className="form-group">
            <label  htmlFor="location">Location</label>
            <br />
            <div className="input-group">
               <input type="text" name="location" value={this.state.location } placeholder="Enter location" onChange={this.handleChange} />
            </div>
         </div>
         <button type="submit" className="btn btn-default">Add Recruiter</button>
       </form>
    </div>
  )
}
}
export default RecruiterNewForm
