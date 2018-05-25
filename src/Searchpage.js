// called by FirstPage
import React, { Component } from 'react';

class FirstPage extends Component {
  render(){
    console.log(this.props);
    return(
      <div>
        SEARCH
        <br/>
        {this.props.state.searchterm}
      </div>
    )
  }
}
export default FirstPage
