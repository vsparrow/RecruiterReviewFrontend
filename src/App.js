import React, { Component } from 'react';
import './App.css';
// import Signup from "./Signup"
import  FirstPage from "./FirstPage"
import LoginOrSignup from "./LoginOrSignup"

class App extends Component {


  state = {
    authorization: "",
  }

  setAuthorization = (token)=>{
    this.setState({authorization: token})
  }


  render() {
    console.log("APP");
    console.log(this.state);
    return (
      <div className="App">
      { this.state.authorization ? <FirstPage authorization={this.state.authorization}/> : <LoginOrSignup setAuthorization={this.setAuthorization}/>}
      </div>
    );
  }
}

export default App;
