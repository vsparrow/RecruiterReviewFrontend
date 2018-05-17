import React, { Component } from 'react';

class Login extends Component {
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
    // {this.fetchData}
    this.setState({username: "",password: ""})
  }


  render() {
    return (
      <div>
        <h1>Login</h1>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
          Launch demo modal
        </button>

        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

              <form onClick={this.handleSubmit}>
                <input name="username" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
                <br/>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>


                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <input type="submit" className="btn btn-primary" />
                </div>
              </form>

              </div>

            </div>
          </div>
        </div>


      </div>
    )
  }//render
}//class
export default Login
