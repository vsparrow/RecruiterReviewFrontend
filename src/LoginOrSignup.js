import React, { Component } from 'react';
import Login from "./Login"
import Signup from "./Signup"
import HeaderLoginSignup from "./HeaderLoginSignup"
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
        <HeaderLoginSignup displayLoginToggle={this.displayLoginToggle} />
        {this.state.login ? <Login state={this.props.state} displayLoginToggle={this.displayLoginToggle} setAuthorization={this.props.setAuthorization}/> : < Signup state={this.props.state} displayLoginToggle={this.displayLoginToggle} setAuthorization={this.props.setAuthorization}/>}
      </div>
    )//return
  }//render
}//class
export default LoginOrSignup
