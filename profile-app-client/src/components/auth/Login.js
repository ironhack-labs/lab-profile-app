import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Login extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            username: "",
            password: "",
            campus: "",
            course: "",
            errorMsgUsername: null,
            errorMsgPassword: null,
        };
        this.service = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

   
  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then((response) => {
        let redirectTo = "/profile";

        this.setState({
          username: "",
          password: "",
          errorMsgUsername: null,
          errorMsgPassword: null,
        });

        this.props.getUser(response);
        // redirecting to /projects
        if (this.props.location.state) {
          redirectTo = this.props.location.state.from.pathname;
        }
        this.props.history.push(redirectTo);
      })
      .catch((error) => {
        const { message } = error.response.data;

        message.endsWith("password.")
          ? this.setState({
              errorMsgPassword: message,
            })
          : this.setState({
              errorMsgUsername: message,
            });
        console.log(error.response, message);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { errorMsgUsername, errorMsgPassword } = this.state;

    const inputClassName = "input is-small";

    const classNameUsername = errorMsgUsername
      ? `${inputClassName} is-danger`
      : inputClassName;
    const classNamePassword = errorMsgPassword
      ? `${inputClassName} is-danger`
      : inputClassName;

    return (
      <div className="section">
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <div className="control">
              <label className="label">Username</label>

              <input
                className={classNameUsername}
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            {errorMsgUsername && (
              <p className="help is-danger">{this.state.errorMsgUsername}</p>
            )}
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Password</label>
              <input
                className={classNamePassword}
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            {errorMsgPassword && (
              <p className="help is-danger">{this.state.errorMsgPassword}</p>
            )}
          </div>
          <input className="button" type="submit" value="Login" />
        </form>
        <p>
          Don't have an account?
          <Link to={"/signup"}> Signup</Link>
        </p>
      </div>
    );
  }
}

export default Login;