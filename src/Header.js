// #called by FirstPage.js
import React, { Component } from 'react';

class Header extends Component {


  state={searchterm: ""}

  handleChange = (e)=>{
    this.setState({searchterm: e.target.value})
  }

  handleClick=(e)=>{

    let value=e.target.name
    switch(value){
      case "home":
        this.props.selectedRecruiterId(null)
        break;
      case "addrecruiter":
        this.props.selectedRecruiterId("new")
        break;
      case "logout":
        this.props.setLogut()
        break;
      case "search":
        this.handleSearch()
        break;
      default:

    }
  }

  handleSearch = ()=>{
    let searchterm = this.state.searchterm
    this.setState({searchterm: ""})
    let key = "searchterm"
    this.props.setSomeState(key, searchterm )
    this.props.setSomeState("selectedRecruiterId", "search" )
  }

  handleKeyPress(target) {
    if(target.charCode===13){
      this.handleSearch()
    }
  }


  render() {
    // let buttons = "";
    let topleft = <div className="navbar-left"><a tabIndex="0"  onClick={this.handleClick} name="home">HOME</a><a tabIndex="0"  onClick={this.handleClick} name="addrecruiter">ADD Recruiter</a></div>
    let topright =   <div className="navbar-right" style={{textAlign: "right"}}>
      <input style={{verticalAlign: "top"}} onKeyPress={this.handleKeyPress.bind(this)} onChange={this.handleChange} placeholder="Enter search term" value={this.state.searchterm}/>
      <button className="btn btn-sm" name="search" onClick={this.handleClick}>SEARCH</button>
    <a tabIndex="0"  style={{verticalAlign: "top"}} onClick={this.handleClick} className="pull-right" name="logout">LOGOUT</a></div>

    return (
      <div className="Header navbar">
          {topleft}{topright}
      </div>
    );
  }
}

export default Header;
