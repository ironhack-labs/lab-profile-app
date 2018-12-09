import React, { Component } from "react";
import AuthService from "../Auth/AuthService";
import Button from "../Button";
import {Redirect} from "react-router-dom";
import "./Signup.css";

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      campus: "",
      course: "",
      redirect:false
    };

    this.authService = new AuthService();
  }
  handleFormSubmit = e => {
    e.preventDefault();
    let { username, password, campus, course } = this.state;

    this.authService.signup(username, password, campus, course)
    .then(user => {
      this.setState({ username: "", password: "", campus: "", course: "",redirect:true });

    })
    .catch( error => console.log(error) )
    
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (!this.state.redirect) ? (
      <div className="signup">
        <div className="rigth">
          <h1>Sign up</h1>
          <form onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              name="username"
              onChange={e => this.handleChange(e)}
              placeholder="Username"
            />
            <br />
            <input
              type="text"
              name="password"
              onChange={e => this.handleChange(e)}
              placeholder="password"
            />
            <br />
            <input
              type="text"
              name="campus"
              onChange={e => this.handleChange(e)}
              placeholder="campus"
            />
            <br />
            <input
              type="text"
              name="course"
              onChange={e => this.handleChange(e)}
              placeholder="course"
            />
            <br />
            <Button type={"submit"}>Create the Account</Button>
          </form>
        </div>
        <div className="left" />
      </div>
    ): <Redirect to={'/profile'}></Redirect>;
  }
}
