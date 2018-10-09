// auth/Signup.js
import React, { Component } from "react";
import AuthService from "./AuthService";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          campus: "",
          course: ""
        });
        this.props.getUser(response.user);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
      <div>
        <h3>Sing up</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Campus:</label>
            <input
              type="text"
              name="campus"
              value={this.state.campus}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <fieldset>
            <label>Course:</label>
            <input
              type="text"
              name="course"
              value={this.state.course}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <input type="submit" value="Sign up" />
        </form>
        </div>
        <div>
          <h2>Hola!</h2>
          <h3>Welcome to IronProfile!</h3>
          <p>If you signup, you agree with all our terms</p>
        </div>
      </div>
    );
  }
}

export default Signup;
