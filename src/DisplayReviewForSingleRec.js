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
    let stars = null;
    if(this.props.review.review){
      review=this.props.review.review.slice(0,30)
      review += "..."
    }
    stars = "*".repeat(this.props.review.rating)
    // }
    ///////////////////////////////////////////////////////
    let linkStyle={};
    if (this.state.hover) { linkStyle = {backgroundColor: 'blue'}    }
    else {      linkStyle = {}    }

    return(
      <div className="DisplayReviewForSingleRec" style={linkStyle} onMouseEnter={this.toggleHover}  onMouseLeave={this.toggleHover}>
        <h3>{review}</h3>
        <span>Rating: {stars}</span><br/>
        {this.state.show ? <button onClick={this.handleClick}>Less..</button> : <button onClick={this.handleClick}>More..</button>}
      </div>
    )
  }
}
export default DisplayReviewForSingleRec
