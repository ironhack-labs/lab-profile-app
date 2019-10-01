import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { signUp as signUpService } from "../services/authentication-api";

export default class SignUp extends Component {
  state = {
    username: "",
    password: "",
    campus: "Madrid",
    course: "Web Dev"
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
    console.log(this.state);
    const { username, password, campus, course } = this.state;
    signUpService({ username, password, campus, course })
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
        <Form onSubmit={this.signUp}>
          <Form.Group>
            <Form.Label htmlFor="sign-up-username">Username</Form.Label>
            <Form.Control
              id="sign-up-username"
              name="username"
              required
              type="text"
              placeholder="Username"
              onChange={this.onValueChange}
              value={this.state.username}
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
          <Form.Group>
            <Form.Label htmlFor="sign-up-campus">Campus</Form.Label>
            <Form.Control
              as="select"
              id="sign-up-campus"
              name="campus"
              required
              onChange={this.onValueChange}
              value={this.state.campus}
            >
              {[
                "Madrid",
                "Barcelona",
                "Miami",
                "Paris",
                "Berlin",
                "Amsterdam",
                "México",
                "São Paulo"
              ].map(campus => {
                return (
                  <option key={campus} value={campus}>
                    {campus}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="sign-up-course">Course</Form.Label>
            <Form.Control
              as="select"
              id="sign-up-course"
              name="course"
              required
              onChange={this.onValueChange}
              value={this.state.course}
            >
              {["Web Dev", "UX/UI", "Data Analytics"].map(course => {
                return (
                  <option key={course} value={course}>
                    {course}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
      </div>
    );
  }
}
