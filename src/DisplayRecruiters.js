// called by FirstPageDisplayRecruitersJunction
import React, { Component } from 'react';
import DisplayRecruiterMinimal from './DisplayRecruiterMinimal'

class DisplayRecruiters extends Component {
  handleClickOnRec = (id)=>{
    this.props.selectedRecruiterId(id)
  }

  render(){
    const recruiters = this.props.state.recruiters.map((recruiter,index)=><div key={index} ><DisplayRecruiterMinimal index={index} handleClickOnRec={this.handleClickOnRec} recruiter={recruiter}/></div> )
    return(
      <div className="DisplayRecruiters container" style={{overflow: "auto"}}>
        <h1>List of Recruiters</h1>
        {recruiters}
      </div>
    )
  }
}
export default DisplayRecruiters
