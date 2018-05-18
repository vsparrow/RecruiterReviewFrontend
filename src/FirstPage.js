import React, { Component } from 'react';

class FirstPage extends Component {
  state = {recruiters: []}

  componentDidMount(){
    console.log("mounted");
    this.fetchRecruiters()
  }

  fetchRecruiters = ()=>{
    // url = "http://127.0.0.1:3000/"
    console.log("props state");
    console.log(this.props.state);
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
