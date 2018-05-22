
import React, { Component } from 'react';
import DisplayRecruiters from './DisplayRecruiters'
import DisplayRecruiterFull from './DisplayRecruiterFull'
class FirstPageDisplayRecruitersJunction extends Component {
  render(){
    let sendState = {...this.props.state}

    return(
      <div className="FirstPageDisplayRecruitersJunction">

        {this.props.state.selectedRecruiterId ? <DisplayRecruiterFull state={sendState}  fetchRecruiters={this.props.fetchRecruiters} selectedRecruiterId={this.props.selectedRecruiterId} />: <DisplayRecruiters state={sendState} selectedRecruiterId={this.props.selectedRecruiterId} />}
      </div>
    )
  }
}
export default FirstPageDisplayRecruitersJunction
