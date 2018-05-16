import React, { Component } from 'react';

class Signup extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = (event)=>{
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state);
    this.fetchData()
    // {this.fetchData}
    this.setState({username: "",password: ""})
  }

  fetchData = ()=>{
    const url = "http://127.0.0.1:3000"
    fetch(url + "/users")
    .then(res=>res.json())
    .then(json=>console.log(json))
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form onClick={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
          <br/>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
          <input type="submit"/ >
        </form>
      </div>
    )
  }//render
}//class
export default Signup
