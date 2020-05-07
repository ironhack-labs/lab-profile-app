import React, { Component } from "react";
import AuthService from "../components/authService";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
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
          password: "" });


        this.props.getUser(response);
        if (this.props.location.state) {
          redirectTo = this.props.location.state.from.pathname;
        }
        this.props.history.push(redirectTo);
        
      })
      .catch((error) => console.log(error));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          >
          </input>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
          ></input>
          <input className="button" type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}
