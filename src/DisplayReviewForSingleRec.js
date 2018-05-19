import React, { Component } from 'react';

class DisplayReviewForSingleRec extends Component {
  state = {hover: false}

  toggleHover =  ()=>{
    this.setState({hover: !this.state.hover})
  }

  render(){
    let review = null;
    let stars = null;
    if(this.props.review.review){
      console.log("GREATER THAN 0");
      console.log(this.props.review);
      review=this.props.review.review.slice(0,30)
      review += "..."
    }
    // switch(this.props.review.rating){
    //   case(5):
    //     stars = ""
    //     break;
    //   default:
    stars = "*".repeat(this.props.review.rating)
    console.log(stars);
    // }
    ///////////////////////////////////////////////////////
    let linkStyle={};
    if (this.state.hover) { linkStyle = {backgroundColor: 'blue'}    }
    else {      linkStyle = {}    }
    // console.log(review);
    return(
      <div className="DisplayReviewForSingleRec" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <h3>{review}</h3>
        <span>Rating: {stars}</span>
      </div>
    )
  }
}
export default DisplayReviewForSingleRec
