// called by DisplayReviewsForSingleRec
import React, { Component } from 'react';
// import DisplayReviewForSingleRecFullContent from './DisplayReviewForSingleRecFullContent'
// import Modal from './DisplayReviewForSingleRecFullContent'

class DisplayReviewForSingleRec extends Component {
  state = {hover: false,
    show: false
    // currentModal: null
  }

  toggleHover =  ()=>{
    this.setState({hover: !this.state.hover})
  }

  handleClick =()=>{
    console.log("clicking");
    this.setState({show: !this.state.show}, ()=>{console.log(this.state)})
  }

  render(){
    let review = null;
    let stars = [];
    let reviewFull = null //<--------added
    if(this.props.review.review){
      review=this.props.review.review.slice(0,30)
      if(this.props.review.review.length > 30){review += "..."}
      /////////////////////////////////////////////////
      reviewFull=this.props.review.review

      /////////////////////////////////////////////////
    }//if this.props.review


    // let newstars = "*".repeat(this.props.review.rating)
    // let newstars = <i class="fas fa-star"></i>.repeat(this.props.review.rating) //this wont work
    if(this.props.review.rating){
      // stars = <i class="fas fa-star"></i>
      for(let i=0;i<this.props.review.rating;i++){
        // stars += <i class="fas fa-star"></i>
        stars.push(<i class="fas fa-star"></i>)
      }
    }
    // }
    ///////////////////////////////////////////////////////
    let linkStyle={};
    // if (this.state.hover) { linkStyle = {backgroundColor: 'blue'}    }
    if (this.state.hover) { linkStyle = {borderStyle: 'solid'}    }
    else {      linkStyle = {}    }

    return(
      <div className="DisplayReviewForSingleRec wrapper-relatives" style={linkStyle} onMouseEnter={this.toggleHover}  onMouseLeave={this.toggleHover}>
        {this.state.show ? <h3>{reviewFull}</h3> : <h3>{review}</h3>}
        <span>{stars}</span><br/>
        {this.state.show ? <button className="btn btn-review btn-warning btn-sm" onClick={this.handleClick}>Less..</button> : <button className="btn btn-review btn-sm" onClick={this.handleClick}>More..</button>}
      </div>
    )
  }
}
export default DisplayReviewForSingleRec
