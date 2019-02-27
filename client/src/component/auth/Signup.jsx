import React, { Component } from "react";
import "./Signup.css";
import { Redirect } from "react-router-dom";
import Service from "./Service";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      campus: "",
      course: "",
      redirect: false
    };
    this.Service = new Service();
    this.user = {};
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password, campus, course } = this.state;
    this.Service.signup({ username, password, campus, course }).then(user => {
      this.props.getUser(user);
      this.setState({
        username: "",
        password: "",
        campus: "",
        course: "",
        redirect: true
      });
    });
  };

  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to="/auth/login" />;
    }
    return (
      <div>
        <h1>SIGNUP</h1>

        <form action="submit" onSubmit={e => this.handleSubmit(e)}>
          <label for="username">Username</label>
          <input
            type="text"
            value={this.state.username}
            name="username"
            onChange={e => this.handleChange(e)}
          />
          <label for="password">Password</label>
          <input
            type="text"
            value={this.state.password}
            name="password"
            onChange={e => this.handleChange(e)}
          />
          <label for="campus">Campus</label>
          <input
            type="text"
            value={this.state.campus}
            name="campus"
            onChange={e => this.handleChange(e)}
          />
          <label for="course">Course</label>
          <input
            type="text"
            value={this.state.course}
            name="course"
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
