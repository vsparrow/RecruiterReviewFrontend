// called by Searchpage
import React, { Component } from 'react';
import SearchDisplayRecruiter from "./SearchDisplayRecruiter"

class SeachDisplay extends Component {
  // state = {response_recruiters: []}

  // displayResponseRecruiters = ()=>{
  //   let response = null;
  //   if(this.props.state.response_recruiters.length > 0){
  //     response = this.props.state.response_recruiters.map((recruiter,index)=>
  //
  //        <div key={index} className="SearchPage_displayResponseRecruiters wrapper-relatives" style={{borderStyle: "solid",clear: "both" }} onClick={this.handleClick} data-id={recruiter.id} >
  //         <img className="img-recruiters" src={ require('./placeholder.png') }/>
  //         <div className="" style={{float: "none", overflow: "hidden"}}>
  //         <h2>{recruiter.firstname} {recruiter.lastname}</h2>
  //         <h3>{recruiter.location}</h3>
  //         <h4>Term found in: {recruiter.foundterm} : <span style={{backgroundColor: "yellow"}}>{recruiter[recruiter.foundterm]}</span></h4>
  //         {recruiter.id}
  //         </div>
  //       </div>
  //     )
  //   }//if
  //   return response
  // }//displayResponseRecruiters

  // handleClick = (event)=>{
  //   event.preventDefault();
  //   // console.log(event.currentTarget.name);
  //   console.log(event.currentTarget);
  //   console.log(event.currentTarget.key);
  //   console.log(event.target.key);
  //   console.log(event.currentTarget["data-value"]);
  //   // const target = event.target
  //   // console.log(event.target);
  //   // console.log("click");
  //   // console.log(target);
  //
  // }

  render(){
    // console.log(this.props);
    // console.log(this.displayResponseRecruiters());
    let recruiters =  this.props.state.response_recruiters.map((recruiter,index)=>
      <div key={index}>
        <SearchDisplayRecruiter recruiter={recruiter} state={this.props.state}/>
      </div>
    )

    return(
      <div>
        SearchDisplay
        {recruiters}
      </div>
    )
  }
}
export default SeachDisplay
