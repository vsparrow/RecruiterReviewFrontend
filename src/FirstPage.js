// #called by App.js
import React, { Component } from 'react';
import FirstPageDisplayRecruitersJunction from './FirstPageDisplayRecruitersJunction'
// import DisplayRecruiters from './DisplayRecruiters'
// import DisplayRecruiterFull from './DisplayRecruiterFull'
import RecruiterNewForm from './RecruiterNewForm'
import Searchpage from "./Searchpage"
import Header from "./Header"

class FirstPage extends Component {
  state = {
    recruiters: [],
    selectedRecruiterId: null,
    searchterm: ""
  }

  componentDidMount(){
    // console.log("mounted");
    this.fetchRecruiters()
  }

  fetchRecruiters = ()=>{
    // url = "http://127.0.0.1:3000/"
    const url = this.props.state.url + "/recruiters"
    // console.log("props state");
    // console.log(this.props.state);
    // console.log(url);
    fetch(url,{
      method: 'GET',
      headers: {'Content-type' : 'application/json', authorization: this.props.state.authorization}
    })
    .then(res=>res.json())
    // .then(json=>console.log(json))
    // .then(json=>{this.setState({recruiters: json},()=>{console.log(this.state)})
    .then(json=>{this.setState({recruiters: json})
    })
  }//fetchRecruiters
  //////////////////////////////////////////////////////////////////////////////functions to passdown
  selectedRecruiterId = (id)=>{
    // this.setState({selectedRecruiterId: id},()=>{console.log(this.state)})
    this.setState({selectedRecruiterId: id})
  }


  setSomeState = (key,value)=>{
    this.setState({[key]: value})
  }

  addToRecruiters = (value, newrecid)=>{
    this.setState({recruiters: value,selectedRecruiterId: newrecid})
  }
  //////////////////////////////////////////////////////////////////////////////
  render(){
    console.log("FirstPage");
    console.log(this.state);
    let sendState = {...this.state,...this.props.state}
    let display = null;
    if(this.state.selectedRecruiterId==="new"){ display = <RecruiterNewForm state={sendState} addToRecruiters={this.addToRecruiters}/>}
    else if(this.state.selectedRecruiterId === "search"){ display = <Searchpage state={sendState} setSomeState={this.setSomeState}/>}
    else {display = <FirstPageDisplayRecruitersJunction state={sendState} fetchRecruiters={this.fetchRecruiters} selectedRecruiterId={this.selectedRecruiterId}/>}
    return(
      <div className="FirstPage">
      <Header state={this.sendState} setSomeState={this.setSomeState} selectedRecruiterId={this.selectedRecruiterId} setLogut={this.props.setLogut}/>
        <div className="main">
          {display}
        </div>
      </div>
    )
  }
}
export default FirstPage
