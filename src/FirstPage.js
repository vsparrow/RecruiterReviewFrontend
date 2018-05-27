// #called by App.js
import React, { Component } from 'react';
import FirstPageDisplayRecruitersJunction from './FirstPageDisplayRecruitersJunction'
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
    this.fetchRecruiters()
  }

  fetchRecruiters = ()=>{
    const url = this.props.state.url + "/recruiters"
    fetch(url,{
      method: 'GET',
      headers: {'Content-type' : 'application/json', authorization: this.props.state.authorization}
    })
    .then(res=>res.json())
    .then(json=>{this.setState({recruiters: json})
    })
  }//fetchRecruiters

  selectedRecruiterId = (id)=>{
    this.setState({selectedRecruiterId: id})
  }


  setSomeState = (key,value)=>{
    this.setState({[key]: value})
  }

  addToRecruiters = (value, newrecid)=>{
    this.setState({recruiters: value,selectedRecruiterId: newrecid})
  }
  
  render(){
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
