// called by FirstPage
import React, { Component } from 'react';

class FirstPage extends Component {

  componentDidMount(){
    // console.log("componentDidMount");
    this.fetchRecruiters()
  }

  componentDidUpdate(){
    this.fetchRecruiters()
  }

  fetchRecruiters = ()=>{
    console.log("*****************fetch");
    const url = this.props.state.url + "/search"
    fetch(url,{
      method: 'POST',
      headers: {'Content-type' : 'application/json', authorization: this.props.state.authorization},
      body:  JSON.stringify({search: this.props.state.searchterm})
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
    // .then(json=>{this.setState({recruiters: json},()=>{console.log(this.state)})
    // .then(json=>{this.setState({recruiters: json})
  }//fetchRecruiters

  render(){
    console.log(this.props);
    return(
      <div>
        SEARCH
        <br/>
        {this.props.state.searchterm}
      </div>
    )
  }
}
export default FirstPage
