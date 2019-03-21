import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Login extends Component {
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
      .login(username, password)
      .then(response => {
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
        this.props.history.push(`/profile`);
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
        <h1>Log in</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <label>Password:</label>
          <textarea
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <p>
            If you signup, you agree with all our terms and conditions where we
            can do whaterver we want with the data!
          </p>
          <input type="submit" value="Log In" />
        </form>
        <p>
          If you don't have an account yet, you can create your account
          <Link to={"/signup"}> here</Link>.
        </p>
        <h2>Hello!!</h2>
        <p>Awesome to have at IronProfile again!</p>
      </div>
    );
  }
}

export default Login;
