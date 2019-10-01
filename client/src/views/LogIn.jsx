import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { signIn as signInService } from "../services/authentication-api";

export default class LogIn extends Component {
  state = {
    username: "",
    password: ""
  };

  onValueChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === "number"
        ? event.target.valueAsNumber
        : event.target.value;
    this.setState({
      [name]: value
    });
  };

  signIn = event => {
    event.preventDefault();
    const { username, password } = this.state;
    signInService({ username, password })
      .then(user => {
        this.props.loadUser(user);
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.signIn}>
          <Form.Group>
            <Form.Label htmlFor="sign-in-username">Username</Form.Label>
            <Form.Control
              id="sign-in-username"
              name="username"
              required
              type="text"
              placeholder="Username"
              onChange={this.onValueChange}
              value={this.state.username}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="sign-in-password">Password</Form.Label>
            <Form.Control
              id="sign-in-password"
              name="password"
              required
              type="password"
              placeholder="Password"
              onChange={this.onValueChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Sign In</Button>
        </Form>
      </div>
    );
  }
}
