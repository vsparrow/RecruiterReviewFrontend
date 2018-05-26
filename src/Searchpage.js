// called by FirstPage
import React, { Component } from 'react';
import SearchDisplay from "./SearchDisplay"
let oldsearchterm = ""

class Searchpage extends Component {
  state = {response_recruiters: []}

  componentDidMount(){
    // console.log("componentDidMount");
    this.fetchRecruiters()
    oldsearchterm = this.props.state.searchterm
  }

  componentDidUpdate(){    //causes state loop, switch to ComponentReceiveProps?
    if(this.props.state.searchterm !== oldsearchterm){
     this.fetchRecruiters()
    }
  }
  // componentWillReceiveProps(){
  //    this.fetchRecruiters()
  //  }
  //
  fetchRecruiters = ()=>{
    // console.log("*****************fetch");
    const url = this.props.state.url + "/search"
    fetch(url,{
      method: 'POST',
      headers: {'Content-type' : 'application/json', authorization: this.props.state.authorization},
      body:  JSON.stringify({search: this.props.state.searchterm})
    })
    .then(res=>res.json())
    .then(json=>{this.handleJSON(json)})
  }//fetchRecruiters

  handleJSON = (json)=>{
    // console.log(json);
    // if(this.state.response_recruiters !== json.response_recruiters)        //cause an state loop
    {this.setState({response_recruiters: json.response_recruiters})}
  }

  displayResponseRecruiters = ()=>{
    let response = null;
    if(this.state.response_recruiters.length > 0){
      response = this.state.response_recruiters.map((recruiter,index)=>

         <div key={index} className="SearchPage_displayResponseRecruiters wrapper-relatives" style={{borderStyle: "solid",clear: "both" }} >
          <img className="img-recruiters" src={ require('./placeholder.png') }/>
          <div className="" style={{float: "none", overflow: "hidden"}}>
          <h2>{recruiter.firstname} {recruiter.lastname}</h2>
          <h3>{recruiter.location}</h3>
          <h4>Term found in: {recruiter.foundterm}</h4>
          </div>
        </div>
      )
    }//if
    return response
  }//displayResponseRecruiters
  // {this.displayResponseRecruiters()}

  render(){
    let sendState = {...this.state,...this.props.state}
    // console.log(this.props);
    // console.log(this.displayResponseRecruiters());
    return(
      <div>
        SEARCH
        <br/>
        <h1>Search for: <em>{this.props.state.searchterm}</em></h1>
        <SearchDisplay state={sendState} setSomeState={this.props.setSomeState}/>
      </div>
    )
  }
}
export default Searchpage
