import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { login as loginService } from "./../services/authentication-api";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  login(event) {
    event.preventDefault();
    const { username, password } = this.state;
    loginService({ username, password })
      .then(user => {
        // this.props.loadUser(user);
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <h1>Login</h1>
        <Form onSubmit={this.login}>
          <Form.Group>
            <Form.Label htmlFor="user-name">Username</Form.Label>
            <Form.Control
              id="user-name"
              name="username"
              type="text"
              placeholder="User Name"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="user-password">Password</Form.Label>
            <Form.Control
              id="user-password"
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    );
  }
}

//client - services- authentication axios,
//        views - forms with handle changes
//server - controllers -router contrroller
// routes - login
