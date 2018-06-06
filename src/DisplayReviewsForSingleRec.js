// called by DisplayRecruiterFull
import React, { Component } from 'react';
import DisplayReviewForSingleRec from './DisplayReviewForSingleRec'
class DisplayReviewsForSingleRec extends Component {
  state = {reviewsSingleRec: []}

  componentDidMount(){
    const url = this.props.state.url + "/recruiters/" + this.props.state.selectedRecruiterId
    fetch(url,{
      method: 'GET',
      headers: {'Content-type' : 'application/json', authorization: this.props.state.authorization}
    })
    .then(res=>res.json())
    .then(json=>
      {
        this.setState({reviewsSingleRec: json.reviews})
        this.props.set_average_rating(json.average_rating)
      }
    )
  }

  render(){
    const reviews = this.state.reviewsSingleRec.map((review,index)=>{
        return <div key={index}><DisplayReviewForSingleRec review={review}/></div>
    })
    return(
      <div className="DisplayReviewsForSingleRec" >
        {reviews}
      </div>
    )
  }
}
export default DisplayReviewsForSingleRec
