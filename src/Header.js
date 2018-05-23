// #called by FirstPage.js
import React, { Component } from 'react';

class Header extends Component {

  handleClick=(e)=>{
    // console.log(e.target.name);
    // console.log(this.props);
    let value=e.target.name
    switch(value){
      case "home":
        // this.props.setSomeState("selectedRecruiterId", null)
        this.props.selectedRecruiterId(null)
        break;
      case "addrecruiter":
        this.props.selectedRecruiterId("new")
        break;
      case "logout":
        // console.log("logout");
        // console.log(this.props);
        // this.props.setSomeState("authorization","")
        this.props.setLogut()
        break;
      default:

    }
  }

  render() {
    let buttons = "";
    // let button1 = <button onClick={this.handleClick} name="login">LOGIN</button>
    // let button2 = <button onClick={this.handleClick} name="signup">SIGNUP</button>
    //href example for navbar:   <a href="#home">Home</a>
    // let button3 = <button onClick={this.handleClick} name="home">HOME</button>
    let button3 = <a href="#" onClick={this.handleClick} name="home">HOME</a>
    let button4 = <a href="#" onClick={this.handleClick} name="addrecruiter">ADD Recruiter</a>
    let button5 = <a href="#" onClick={this.handleClick} name="logout">LOGOUT</a>
    ////////////////////////////////////////////////////////////////////////////NOT LOGGED IN
    // if(this.props.state.authorization === ""){
    //   // buttons = [button1, button2]
    // }
    ////////////////////////////////////////////////////////////////////////////LOGGED IN
    // <button onClick={this.handleClick} name="home">Home</button>
    // <button onClick={this.handleClick} name=""></button>
    // if(this.props.state.authorization !== ""){
      buttons = [button3, button4, button5]
            // <button onClick={this.handleClick} name="home">Home</button>
    // }
    ////////////////////////////////////////////////////////////////////////////return function
    return (
      <div className="Header navbar">
        <div style={{textAlign: "left"}}>
          {buttons}
        </div>
      </div>
    );
  }
}

export default Header;
