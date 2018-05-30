// #called by LoginOrSignup.js
import React, { Component } from 'react';

class HeaderLoginSignup extends Component {


  handleClick=(e)=>{
    e.preventDefault();
    let value=e.target.name
    switch(value){
      case "home":
        // "Do Nothing"
        break;
      case "login":
        // this.props.selectedRecruiterId("new")
        this.props.displayLoginToggle(true) //display login
        break;
      case "signup":
        // this.props.setLogut()
        this.props.displayLoginToggle(false) //not display login (show signup)
        break;
      default:

    }
  }


  render() {
    // let buttons = "";
    let topleft = <div className="navbar-left"><a tabIndex="0" onClick={this.handleClick} name="home">RECRUITER REVIEW</a></div>
    let topright =   <div className="navbar-right" style={{textAlign: "right"}}>

    <a tabIndex="0"  style={{verticalAlign: "top"}} onClick={this.handleClick} className="pull-right" name="login">LOGIN</a>
    <a tabIndex="0"  style={{verticalAlign: "top"}} onClick={this.handleClick} className="pull-right" name="signup">SIGNUP</a></div>

    return (
      <div className="HeaderLoginSignup navbar">
          {topleft}{topright}
      </div>
    );
  }
}

export default HeaderLoginSignup;
