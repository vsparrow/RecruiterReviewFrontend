import React, { Component } from 'react';

class FirstPage extends Component {
  state = {recruiters: []}

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

  render(){
    return(
      <div className="FirstPage">
        WELCOME
      </div>
    )
  }
}
export default FirstPage
