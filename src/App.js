import React, { Component } from 'react';
import './App.css';
// import Signup from "./Signup"
import  FirstPage from "./FirstPage"
import LoginOrSignup from "./LoginOrSignup"

class App extends Component {


  state = {
    authorization: "",
    url: "http://127.0.0.1:3000/"
  }

  setAuthorization = (token)=>{
    this.setState({authorization: token})
  }


  render() {
    console.log("APP");
    console.log(this.state);
    return (
      <div className="App">
      { this.state.authorization ? <FirstPage state={this.state}/> : <LoginOrSignup setAuthorization={this.setAuthorization}/>}
      </div>
    );
  }
}

export default App;
