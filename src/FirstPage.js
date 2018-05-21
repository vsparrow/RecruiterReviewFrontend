import React, { Component } from 'react';
import DisplayRecruiters from './DisplayRecruiters'
import DisplayRecruiterFull from './DisplayRecruiterFull'
import Header from "./Header"

class FirstPage extends Component {
  state = {
    recruiters: [],
    selectedRecruiterId: null
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
    this.setState({key: value})
  }

  //////////////////////////////////////////////////////////////////////////////
  render(){
    let sendState = {...this.state,...this.props.state}

    return(
      <div className="FirstPage">
      <Header state={this.sendState} setSomeState={this.setSomeState} selectedRecruiterId={this.selectedRecruiterId}/>

        WELCOME
        {this.state.selectedRecruiterId ? <DisplayRecruiterFull state={sendState}  fetchRecruiters={this.fetchRecruiters} selectedRecruiterId={this.selectedRecruiterId} />: <DisplayRecruiters state={sendState} selectedRecruiterId={this.selectedRecruiterId} />}
      </div>
    )
  }
}
export default FirstPage
