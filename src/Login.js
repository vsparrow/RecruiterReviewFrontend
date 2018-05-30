import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorOnAuthenticate: false
  }

  handleChange = (event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.fetchAuthorization()
    }
    this.setState({username: "",password: ""})
  }

  fetchAuthorization = ()=>{
    // json post with email and password in body
    let loginurl = "http://127.0.0.1:3000/authenticate"
    fetch(loginurl, {
      method: 'post',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({email: this.state.username, password: this.state.password})
    })//fetch
    .then(res=>res.json())
    .then(json=>this.handleJSON(json))
  }//fetchAuthorization

  handleJSON = (json)=>{
    json.error ? this.setState({errorOnAuthenticate: true}) : this.handleAuthenticate(json)
  }//handleJSON

  handleAuthenticate = (json)=>{
    //if successful pass token backup to app
    this.props.setAuthorization(json)
  }

  toggleToSignup = ()=>{
    this.props.displayLoginToggle(false)
  }

  render() {
    return (
      <div>
            <div className="wrapper" onSubmit={this.handleSubmit}>
              <form className="form-signin">
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" onChange={this.handleChange} value={this.state.username} />
                <input type="password" className="form-control" name="password" placeholder="Password" required="" onChange={this.handleChange} value={this.state.password}/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
              </form>
              {this.state.errorOnAuthenticate ? <p style={{color: "red"}}>ERROR SUBMITING EMAIL OR PASSSWORD</p> : null}
            </div>
            <a  tabIndex="0"  onClick={this.toggleToSignup}>No Login? Click here to Signup</a>
      </div>
    )
  }//render
}//class
export default Login
