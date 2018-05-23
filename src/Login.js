import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: "",
    password: "",
    errorOnAuthenticate: false
  }

  handleChange = (event)=>{
    // console.log(event.target.value);
    // console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value},()=>{console.log(this.state)})
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state);
    // {this.fetchData}
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.fetchAuthorization()
    }
    this.setState({username: "",password: ""})
  }

  fetchAuthorization = ()=>{
    // json post with email and password in body
    let loginurl = "http://127.0.0.1:3000/authenticate"
    fetch(loginurl, {
      method: 'post',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({email: this.state.username, password: this.state.password})
    })//fetch
    .then(res=>res.json())
    // .then(json=>console.log(json))
    .then(json=>this.handleJSON(json))
  }//fetchAuthorization

  handleJSON = (json)=>{
    console.log(json);
    json.error ? this.setState({errorOnAuthenticate: true}) : this.handleAuthenticate(json)
  }//handleJSON

  handleAuthenticate = (json)=>{
    console.log("handleAuthenticate");
    console.log(json.auth_token);
    //if successful pass token backup to app
    this.props.setAuthorization(json)
  }

  toggleToSignup = ()=>{
    this.props.displayLoginToggle(false)
  }

  render() {
    return (
      <div>
            <div className="wrapper" onSubmit={this.handleSubmit}>
              <form className="form-signin">
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" onChange={this.handleChange} value={this.state.username} />
                <input type="password" className="form-control" name="password" placeholder="Password" required="" onChange={this.handleChange} value={this.state.password}/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
              </form>
              {this.state.errorOnAuthenticate ? <p style={{color: "red"}}>ERROR SUBMITING EMAIL OR PASSSWORD</p> : null}
            </div>
            <a  onClick={this.toggleToSignup}>No Login? Click here to Signup</a>
      </div>
    )
  }//render
}//class
export default Login

// USE THIS FOR THE COOKIES OPTION
// <label className="checkbox">
//   <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
// </label>


// modal version below:
// <div>
//   <h1>Login</h1>
//
//   <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
//     Launch demo modal
//   </button>
//
//   <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
//     <div className="modal-dialog modal-dialog-centered" role="document">
//       <div className="modal-content">
//         <div className="modal-header">
//           <h5 className="modal-title" id="exampleModalLongTitle">Login</h5>
//           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div className="modal-body">
//
//         <form onClick={this.handleSubmit}>
//           <input name="username" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
//           <br/>
//           <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
//
//
//           <div className="modal-footer">
//             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//             <input type="submit" className="btn btn-primary" />
//           </div>
//         </form>
//
//         </div>
//
//       </div>
//     </div>
//   </div>
//
//
// </div>
