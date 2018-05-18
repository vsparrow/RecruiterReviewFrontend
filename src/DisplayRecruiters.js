import React, { Component } from 'react';
import DisplayRecruiterMinimal from './DisplayRecruiterMinimal'

class DisplayRecruiters extends Component {
  handleClickOnRec = (id)=>{
    console.log("ID of clicked REC IS: " +id);
    this.props.selectedRecruiterId(id)
  }

  render(){
    console.log("DisplayRecruiters");
    console.log(this.props.state);
    console.log("end ****");
    const recruiters = this.props.state.recruiters.map((recruiter,index)=><div key={index} ><DisplayRecruiterMinimal index={index} handleClickOnRec={this.handleClickOnRec} recruiter={recruiter}/></div> )
    return(
      <div className="DisplayRecruiters container" >
        DisplayRecruiters
        {recruiters}
      </div>
    )
  }
}
export default DisplayRecruiters
