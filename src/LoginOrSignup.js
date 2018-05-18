import React, { Component } from 'react';
import Login from "./Login"
import Signup from "./Signup"

class LoginOrSignup extends Component {
  state = {login: true}

  //setAuthorization function that takes the authorization token

  //this function used to toggle between login window or signup window
  displayLoginToggle = (value)=>{
    this.setState({login: value})
  }

  render(){
    return(
      <div>
        {this.state.login ? <Login displayLoginToggle={this.displayLoginToggle} setAuthorization={this.props.setAuthorization}/> : < Signup displayLoginToggle={this.displayLoginToggle} setAuthorization={this.props.setAuthorization}/>}
      </div>
    )//return
  }//render
}//class
export default LoginOrSignup
