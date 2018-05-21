import React, { Component } from 'react';
import './App.css';
// import Signup from "./Signup"
import  FirstPage from "./FirstPage"
import LoginOrSignup from "./LoginOrSignup"

class App extends Component {


  state = {
    authorization: "",
    url: "http://127.0.0.1:3000/",
    login: true,
    currentPage: null
  }

  setAuthorization = (token)=>{
    this.setState({authorization: token})
  }

  setLogin = (value)=>{ //true or false
    this.setState({login: value})
  }

  render() {
    // console.log("APP");
    // console.log(this.state);
    // let stateProps = {...this.state, ...{setCurrentPage: this.setCurrentPage}}
    // let stateProps = {...this.state, ...{this.setCurrentPage}}
    // console.log(stateProps);
    return (
      <div className="App">
      { this.state.authorization ? <FirstPage state={this.state}/> : <LoginOrSignup setAuthorization={this.setAuthorization} setLogin={this.setLogin}/>}
      </div>
    );
  }
}

export default App;
