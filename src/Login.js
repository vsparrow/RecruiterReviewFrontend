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
    this.props.setAuthorization(json.auth_token)
  }

  render() {
    return (
      <div>
        <h1>Login</h1>

              <form onClick={this.handleSubmit}>
                <input name="username" placeholder="username" onChange={this.handleChange} value={this.state.username}/>
                <br/>
                <input type="password" name="password" placeholder="password" onChange={this.handleChange} value={this.state.password}/>
                <br/>
                <input type="submit" className="btn btn-primary" />
              </form>
            {this.state.errorOnAuthenticate ? <p style={{color: "red"}}>ERROR SUBMITING EMAIL OR PASSSWORD</p> : null}

      </div>
    )
  }//render
}//class
export default Login



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
