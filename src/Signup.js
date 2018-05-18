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
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state);
    this.fetchData()
    // {this.fetchData}
    // this.setState({email: "",password: "", firstname: "", lastname: ""})
  }

  fetchData = ()=>{
    const url = "http://127.0.0.1:3000"
    fetch(url+"/signup", {
      method: 'post',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({email: this.state.email, password: this.state.password,firstname: this.state.firstname,lastname: this.state.lastname})
    })//fetch
    .then(res=>res.json())
    // .then(json=>console.log(json))
    .then(json=>this.handleSignupJSON(json))
  }

  handleSignupJSON = (json)=>{
    console.log(json);
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
    // .then(json=>console.log(json))
    .then(json=>this.handleJSON(json))
  }//fetchAuthorization

  handleJSON = (json)=>{
    // console.log(json);
    json.error ? this.setState({errorOnAuthenticate: true}) : this.handleAuthenticate(json)
  }//handleJSON

  handleAuthenticate = (json)=>{
    console.log("handleAuthenticate");
    console.log(json.auth_token);
    //if successful pass token backup to app
    this.props.setAuthorization(json.auth_token)
  }
  //////////////////////////////////////////////////////////// above same as Login.js, refactor this



  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstname" placeholder="firstname" onChange={this.handleChange} value={this.state.firstname}/>
          <input type="text" name="lastname" placeholder="lastname" onChange={this.handleChange} value={this.state.lastname}/>
          <input type="text" name="email" placeholder="email" onChange={this.handleChange} value={this.state.email}/>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
          <input type="submit"/ >
        </form>
        <p>
          <button onClick={this.toggleToLogin}>Login here</button>
        </p>
        {this.state.error ? <span style={{color: "red"}}>ERROR PLEASE CHECK INPUT</span> : null}
      </div>
    )
  }//render
}//class
export default Signup
