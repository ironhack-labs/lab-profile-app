import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { signUp as signUpService } from "./../services/authentication-api";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      campus: "",
      course: ""
    };
    this.signUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  signUp(event) {
    event.preventDefault();
    const { username, password, campus, course } = this.state;
    signUpService({ username, password, campus, course })
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
        <h1>Sign up</h1>
        <Form onSubmit={this.signUp}>
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
          <Form.Group>
            <Form.Label htmlFor="user-campus">Campus</Form.Label>
            <Form.Control
              id="user-campus"
              name="campus"
              type="text"
              placeholder="Campus"
              value={this.state.campus}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="user-course">Course</Form.Label>
            <Form.Control
              id="user-course"
              name="course"
              type="text"
              placeholder="Course"
              value={this.state.course}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button type="submit">Sign up</Button>
        </Form>
      </Container>
    );
  }
}
