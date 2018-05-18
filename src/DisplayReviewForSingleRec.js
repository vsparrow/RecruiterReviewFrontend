import React, { Component } from 'react';

class DisplayReviewForSingleRec extends Component {

  render(){
    return(
      <div className="DisplayReviewForSingleRec" >
        DisplayReviewForSingleRec
        <h3>{this.props.review.review}</h3>
      </div>
    )
  }
}
export default DisplayReviewForSingleRec
