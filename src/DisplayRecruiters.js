import React, { Component } from 'react';
import DisplayRecruiterMinimal from './DisplayRecruiterMinimal'

class DisplayRecruiters extends Component {
  render(){
    console.log("DisplayRecruiters");
    console.log(this.props.state);
    console.log("end ****");
    const recruiters = this.props.state.recruiters.map((recruiter,index)=><div key={index}><DisplayRecruiterMinimal/></div> )
    return(
      <div className="DisplayRecruiters">
        DisplayRecruiters
        {recruiters}
      </div>
    )
  }
}
export default DisplayRecruiters
