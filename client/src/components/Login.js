import React, { Component } from "react";
import AuthService from './Tools'
import {Redirect} from "react-router-dom";

export default class Login extends Component {
  constructor(){
    super()

    this.state = {
      
        username: '',
        password: '',
        redirect: false
      
    }
    this.authService = new AuthService();
    this.user = {}
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;
    this.state.redirect = true;
    this.authService.login({username, password})
    .then((user) => {
      this.props.getUser(user)
      
    });
  }

  handlerState = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }
    return (
      <div className="ironprofile">
        <h1>Login</h1>
        <form action="submit" onSubmit={this.handleFormSubmit}>
          <input type="text" name="username" id="" placeholder="Username" onChange={(e)=>this.handlerState(e)}/>
          <input type="text" name="password" id="" placeholder="Password" onChange={(e)=>this.handlerState(e)}/>
          <input className="submitbutton" type="submit" />
        </form>
      </div>
    );
  }
}
