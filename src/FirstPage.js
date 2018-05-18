import React, { Component } from 'react';
import DisplayRecruiters from './DisplayRecruiters'
class FirstPage extends Component {
  state = {
    recruiters: [],
    selectedRecruiterId: null
  }

  componentDidMount(){
    console.log("mounted");
    this.fetchRecruiters()
  }

  fetchRecruiters = ()=>{
    // url = "http://127.0.0.1:3000/"
    const url = this.props.state.url + "/recruiters"
    console.log("props state");
    console.log(this.props.state);
    console.log(url);
    fetch(url,{
      method: 'GET',
      headers: {'Content-type' : 'application/json', authorization: this.props.state.authorization}
    })
    .then(res=>res.json())
    // .then(json=>console.log(json))
    .then(json=>{this.setState({recruiters: json},()=>{console.log(this.state)})
    })
  }//fetchRecruiters
  //////////////////////////////////////////////////////////////////////////////functions to passdown
  selectedRecruiterId = (id)=>{
    this.setState({selectedRecruiterId: id},()=>{console.log(this.state)})
  }
  //////////////////////////////////////////////////////////////////////////////
  render(){
    let sendState = {...this.state,...this.props.state}

    return(
      <div className="FirstPage">
        WELCOME
        <DisplayRecruiters state={sendState} selectedRecruiterId={this.selectedRecruiterId} />
      </div>
    )
  }
}
export default FirstPage
