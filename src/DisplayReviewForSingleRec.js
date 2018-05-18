import React, { Component } from 'react';

class DisplayReviewForSingleRec extends Component {

  render(){
    let review = null;
    if(this.props.review.review){
      console.log("GREATER THAN 0");
      console.log(this.props.review);
      review=this.props.review.review.slice(0,30)
      review += "..."
    }
    // console.log(review);
    return(
      <div className="DisplayReviewForSingleRec" >
        DisplayReviewForSingleRec
        <h3>{review}</h3>
      </div>
    )
  }
}
export default DisplayReviewForSingleRec
