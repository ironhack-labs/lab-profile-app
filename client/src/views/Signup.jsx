import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { signUp as signUpService } from "../services/authentication-api";

export default class SignUp extends Component {
  state = {
    email: "",
    name: "",
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

  signUp = event => {
    event.preventDefault();
    const { email, name, password } = this.state;
    signUpService({ email, name, password })
      .then(user => {
        this.props.loadUser(user);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.signUp}>
          <Form.Group>
            <Form.Label htmlFor="sign-up-email">Email</Form.Label>
            <Form.Control
              id="sign-up-email"
              name="email"
              required
              type="email"
              placeholder="Email"
              onChange={this.onValueChange}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="sign-up-name">Name</Form.Label>
            <Form.Control
              id="sign-up-name"
              name="name"
              required
              placeholder="Name"
              onChange={this.onValueChange}
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="sign-up-password">Password</Form.Label>
            <Form.Control
              id="sign-up-password"
              name="password"
              required
              type="password"
              placeholder="Password"
              onChange={this.onValueChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    );
  }
}
