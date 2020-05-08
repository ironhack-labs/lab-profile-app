// auth/Signup.js

import React, { Component } from "react";
import AuthService from "./authService";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", course: "", campus: "" };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange() and handleSubmit() will be added here

  handleFormSubmit(event) {
    event.preventDefault();
    const { username, password, campus, course } = this.state

    this.service
      .signup(username, password, campus, course)
      .then((response) => {
        this.setState({
          username: "",
          password: "",
          course: "", 
          campus: "" 
        });
        console.log(response);
        this.props.getUser(response)
      })
      .catch((error) => console.log(error));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="section">
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <div className="control">
              <label>Username:</label>
              <input
                className="input is-small"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label>Password:</label>
              <input
                className="input is-small"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label>Campus:</label>
              <input
                className="input is-small"
                type="text"
                name="campus"
                value={this.state.campus}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label>Course:</label>
              <input
                className="input is-small"
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <input className="button" type="submit" value="signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}

export default Signup;
