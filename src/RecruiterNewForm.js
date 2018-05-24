//called by FirstPage.js
import React, { Component } from 'react';

class RecruiterNewForm extends Component {
state = { firstname: "", lastname: "", email: "", phonenumber: "", company: "", website: "", linkedin: "", location: ""}

handleChange = (event)=>{
  this.setState({[event.target.name]: event.target.value})
}

handleSubmit = (event)=>{
  event.preventDefault() //not a submit , not a form.


  //handle dusplicated or error checking here: ********************************
  //handle empty fields ************************
  //

  //if checks ok post fetch
  this.submitRecruiter()
  //not needed? since componenet will be removed after submittal
  // this.setState ({ firstname: "", lastname: "", email: "", phonenumber: "", company: "", website: "", linkedin: "", location: ""})
}

//called by handleSubmit
submitRecruiter = ()=>{
  //validations
  // let submit = true;
  // if(this.state.firstname.length < 2){submit = false}
  // if(this.state.lastname.length < 2){submit = false}
  //no email validation,
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
      user_id: this.props.state.user_id //should be able to remove this
    })
  })//fetch
  .then(res=>res.json())
  // .then(json=>console.log(json))
  .then(json=>this.handleJSON(json))
}//submitRecruiter

handleJSON = (json)=>{
  // console.log(json);
  // let recruiter_id = json.recruiter_id
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
    // let recruiters = [...this.props.state.recruiters, recruiter_obj]
    // console.log(recruiters);
    this.props.addToRecruiters([...this.props.state.recruiters, recruiter_obj], json.recruiter_id )
      // setSomeState = (key,value)=>{
      //   this.setState({key: value})
      // }
    //set top state.selectedRecruiterId to new recruiter_id
  }//if
}

render(){
    // console.log(this.state);
    // console.log("this.props");
    // console.log(this.props);
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
         <button type="submit" className="btn btn-default">Register</button>
       </form>
    </div>
  )
}
}
export default RecruiterNewForm

// firstname: string, lastname: string, email: string, phonenumber: string, is_generated: boolean,
//  website: string, company: string, linkedin: string, location:
// <label htmlFor=""></label>
// <input type="text" name="" value="" placeholder=""/>

//
// old form
// <h2>RecruiterNewForm</h2>
// <form onSubmit={this.handleSubmit}>
//   <label htmlFor="firstname">First Name</label>
//   <input type="text" name="firstname" value={this.state.firstname} placeholder="" onChange={this.handleChange} required/>
//   <label htmlFor="lastname">Last Name</label>
//   <input type="text" name="lastname" value={this.state.lastname} placeholder="" onChange={this.handleChange} required/>
//   <br/>
//   <label htmlFor="email">Email</label>
//   <input type="text" name="email" value={this.state.email} placeholder="" onChange={this.handleChange}   required/>
//   <label htmlFor="phonenumber">Phone Number</label>
//   <input type="tel" name="phonenumber" value={this.state.phonenumber} placeholder="" onChange={this.handleChange}/>
//   <br/>
//   <label htmlFor="company">Company</label>
//   <input type="text" name="company" value={this.state.company} placeholder="" onChange={this.handleChange}/>
//   <label htmlFor="website">Website</label>
//   <input type="text" name="website" value={this.state.website} placeholder="" onChange={this.handleChange}/>
//   <br/>
//   <label htmlFor="linkedin">Linkedin</label>
//   <input type="text" name="linkedin" value={this.state.linkedin} placeholder="" onChange={this.handleChange}/>
//   <label htmlFor="location">Location</label>
//   <input type="text" name="location" value={this.state.location} placeholder="" onChange={this.handleChange} />
//   <br/>
//   <input type="submit"/>
// </form>
