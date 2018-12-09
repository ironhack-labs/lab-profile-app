import React, { Component } from "react";
import AuthService from "../Auth/AuthService";
import { Redirect } from "react-router-dom";
import Button from "../Button";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      redirect: false
    };

    this.authService = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    this.authService.login(username, password).then(user => {
      this.props.getUser(user);
      this.setState({ ...this.state, redirect: true });
    });
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return !this.state.redirect ? (
      <div>
        <h2> Login </h2>
        <form onSubmit={this.handleFormSubmit}>
          <label> Username </label>
          <input
            type="text"
            name="username"
            onChange={e => this.handleChange(e)}
          />
          <label> Password </label>
          <input
            type="password"
            name="password"
            onChange={e => this.handleChange(e)}
          />
          <Button type={"submit"}> Login </Button>
        </form>
      </div>
    ) : (
      <Redirect to={"/profile"} />
    );
  }
}
