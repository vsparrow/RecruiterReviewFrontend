// called by Searchpage
import React, { Component } from 'react';
import SearchDisplayRecruiter from "./SearchDisplayRecruiter"

class SeachDisplay extends Component {

  render(){
    let recruiters =  this.props.state.response_recruiters.map((recruiter,index)=>
      <div key={index}>
        <SearchDisplayRecruiter recruiter={recruiter} state={this.props.state} setSomeState={this.props.setSomeState}/>
      </div>
    )

    return(
      <div>
        {recruiters}
      </div>
    )
  }
}
export default SeachDisplay
