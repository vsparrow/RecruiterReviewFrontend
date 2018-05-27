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
    currentPage: null,
    user_id: null
  }

  setAuthorization = (json)=>{
    this.setState({authorization: json.auth_token, user_id: json.user_id})
  }

  setLogin = (value)=>{ //true or false
    this.setState({login: value})
  }

  setLogut = ()=>{ //true or false
    this.setState({login: true, authorization: "", user_id: null})
  }

  render() {
    return (
      <div className="App">
      { this.state.authorization ? <FirstPage state={this.state} setLogut={this.setLogut}/> : <LoginOrSignup setAuthorization={this.setAuthorization} setLogin={this.setLogin}/>}
      </div>
    );
  }
}

export default App;
