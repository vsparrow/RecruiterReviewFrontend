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
      default:

    }
  }

  render() {
    let buttons = "";
    // let button1 = <button onClick={this.handleClick} name="login">LOGIN</button>
    // let button2 = <button onClick={this.handleClick} name="signup">SIGNUP</button>
    let button3 = <button onClick={this.handleClick} name="home">HOME</button>
    ////////////////////////////////////////////////////////////////////////////NOT LOGGED IN
    // if(this.props.state.authorization === ""){
    //   // buttons = [button1, button2]
    // }
    ////////////////////////////////////////////////////////////////////////////LOGGED IN
    // <button onClick={this.handleClick} name="home">Home</button>
    // <button onClick={this.handleClick} name=""></button>
    // if(this.props.state.authorization !== ""){
      buttons = [button3]
            // <button onClick={this.handleClick} name="home">Home</button>
    // }
    ////////////////////////////////////////////////////////////////////////////return function
    return (
      <div className="Header">
        <div style={{textAlign: "left"}}>
          {buttons}
        </div>
      </div>
    );
  }
}

export default Header;
