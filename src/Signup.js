import React, { Component } from 'react';

class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    error: false
  }

  handleChange = (event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    this.fetchData()
  }

  fetchData = ()=>{
    const url = "http://127.0.0.1:3000"
    fetch(url+"/signup", {
      method: 'post',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({email: this.state.email, password: this.state.password,firstname: this.state.firstname,lastname: this.state.lastname})
    })//fetch
    .then(res=>res.json())
    .then(json=>this.handleSignupJSON(json))
  }

  handleSignupJSON = (json)=>{
    if (json.error){this.setState({error: true})}
    else if (json.ok) {
      console.log("Creation successful")
      //either auto login or send to login page
      //since we stil have password,username in state, we can call fetch to login
      this.fetchAuthorization()

    }
  }

  toggleToLogin = ()=>{
    this.props.displayLoginToggle(true)
  }

  //////////////////////////////////////////////////////////// same as login, refactor this
  fetchAuthorization = ()=>{
    // json post with email and password in body
    let loginurl = "http://127.0.0.1:3000/authenticate"
    fetch(loginurl, {
      method: 'post',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({email: this.state.email, password: this.state.password})
    })//fetch
    .then(res=>res.json())
    .then(json=>this.handleJSON(json))
  }//fetchAuthorization

  handleJSON = (json)=>{
    json.error ? this.setState({errorOnAuthenticate: true}) : this.handleAuthenticate(json)
  }//handleJSON

  handleAuthenticate = (json)=>{
    this.props.setAuthorization(json)
  }
  //////////////////////////////////////////////////////////// above same as Login.js, refactor this



  render() {
    return (
      <div>

        <div className="wrapper">
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <h2 className="form-signin-heading">SIGNUP</h2>
            <input type="text" className="form-control" name="firstname" placeholder="Firstname" onChange={this.handleChange} value={this.state.firstname} required="" autoFocus="" />
            <input type="text" className="form-control" name="lastname" placeholder="Lastname" onChange={this.handleChange} value={this.state.lastname} required="" autoFocus="" />
            <input type="text" className="form-control" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} required="" autoFocus="" />
            <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password} required=""/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
          </form>
        </div>
        {this.state.error ? <span style={{color: "red"}}>ERROR PLEASE CHECK INPUT</span> : null}
        <a  tabIndex="0" onClick={this.toggleToLogin}>Already Have A Login? Click here</a>

      </div>
    )
  }//render
}//class
export default Signup
