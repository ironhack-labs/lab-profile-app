import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link, Redirect } from "react-router-dom";
import "../auth/Signup.css";
import "../Home.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", redirect: false };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service
      .login(username, password)
      .then(response => {
        this.props.getUser(response); //Al igual que en signup guardamos el usuario.
        this.setState({ username: "", password: "", redirect: true });
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="box-container">
      {this.state.redirect ? <Redirect to="/profile" /> : undefined}
        <div className="box-container">
          <div className="box-text col-sm-6">
            <h2>Login</h2>
            <form onSubmit={this.handleFormSubmit} className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={this.state.username}
                onChange={e => this.handleChange(e)}
              />
              <label>Password:</label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={e => this.handleChange(e)}
              />

              <input type="submit" value="Login" className="button" />
            </form>
            <p>
              Don't have account?
              <Link to={"/signup"}> Signup</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
