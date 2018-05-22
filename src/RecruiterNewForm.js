
import React, { Component } from 'react';

class RecruiterNewForm extends Component {
state = { firstname: "", lastname: "", email: "", phonenumber: "", company: "", website: "", linkedin: "", location: ""}

handleChange = (event)=>{
  this.setState({[event.target.name]: event.target.value})
}

render(){
    console.log(this.state);
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
    </div>
  )
}
}
export default RecruiterNewForm

// firstname: string, lastname: string, email: string, phonenumber: string, is_generated: boolean,
//  website: string, company: string, linkedin: string, location:
// <label htmlFor=""></label>
// <input type="text" name="" value="" placeholder=""/>
