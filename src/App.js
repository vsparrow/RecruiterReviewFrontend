import React, { Component } from 'react';
import './App.css';
import Signup from "./Signup"
import Login from "./Login"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup/>
        <Login />
      </div>
    );
  }
}

export default App;
