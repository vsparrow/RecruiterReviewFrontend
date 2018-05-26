// called by Searchpage
import React, { Component } from 'react';

class SeachDisplay extends Component {
  // state = {response_recruiters: []}

  displayResponseRecruiters = ()=>{
    let response = null;
    if(this.props.state.response_recruiters.length > 0){
      response = this.props.state.response_recruiters.map((recruiter,index)=>

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

  render(){
    console.log(this.props);
    // console.log(this.displayResponseRecruiters());
    return(
      <div>
        SearchDisplay
        {this.displayResponseRecruiters()}
      </div>
    )
  }
}
export default SeachDisplay
