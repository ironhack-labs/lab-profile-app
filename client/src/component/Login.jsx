import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Service from "./Service";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
    this.Service = new Service();
    this.user = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.state.redirect = true;
    this.Service.login({ username, password }).then(user => {
      this.props.getUser(user);
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    if (this.state && this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="App">
        <h1>Log in</h1>
        <form action="submit" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            id=""
            placeholder="Username"
            onChange={e => this.handleChange(e)}
          />
          <input
            type="text"
            name="password"
            id=""
            placeholder="Password"
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" />
        </form>
        <div>
          <p>
            If you don´t have an account yet, you can create your account{" "}
            <Link to="/auth/signup">here</Link>
          </p>
        </div>
        <div>
          <h2>Hello!!</h2>
          <h2>Awesome to have at IronProfile Again</h2>
        </div>
        <div>
          <p>
            If you signup, you agree with all our terms and conditions where we
            can do whatever we want with the data!
          </p>
        </div>
        {/* <input type="submit">Log in</input> */}
      </div>
    );
  }
}
