import React, { Component } from 'react';
import './App.css';
// import Signup from "./Signup"
import  FirstPage from "./FirstPage"
import LoginOrSignup from "./LoginOrSignup"

class App extends Component {


  state = {
    authorization: "",
    url: "http://127.0.0.1:3000/",
    // url: "https://vsparrow-rrapi.herokuapp.com/",
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

  //*******THIS FETCH IS ONLY FOR WAKING UP THE HEROKU BACKEND WHEN FRONTEND ACCESSED *********
  fetchHeroku=()=>{
    fetch(this.state.url + "reviews")
    .then(res=>{
      let r = null
      console.log("There is a call made here to wake up the backend heroku app if its sleeping. Heroku Free Plan. Remove if upgraded.");
      res.length > 0 ?  r = res.json() :  r = ""
      return r
    })
    // .then(res=>res.json())
    // .then(json=>console.log(json))
  }
  //*******THIS FETCH ABOVE IS ONLY FOR WAKING UP THE HEROKU BACKEND WHEN FRONTEND ACCESSED *********

  render() {
    this.fetchHeroku()
    return (
      <div className="App">
      { this.state.authorization ? <FirstPage state={this.state} setLogut={this.setLogut}/> : <LoginOrSignup state={this.state} setAuthorization={this.setAuthorization} setLogin={this.setLogin}/>}
      </div>
    );
  }
}

export default App;
