import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", campus: "", course: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const campus = this.state.campus;
    const course = this.state.course;

    this.service
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          campus: "",
          course: ""
        });
        this.props.getUser(response); //call your mom
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
      <div className="card">
        <h1>Sign up</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />

          <label>Password</label>
          <textarea
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />

          <label>Campus</label>
          <textarea
            name="campus"
            value={this.state.campus}
            onChange={e => this.handleChange(e)}
          />

          <label>Course</label>
          <textarea
            name="course"
            value={this.state.course}
            onChange={e => this.handleChange(e)}
          />

          <input type="submit" value="Create the Account" />
        </form>

        <h2>Hello!!</h2>
        <p>Welcome to IronProfile!</p>
        <p>
          If you signup, you agree with all our terms and conditions where we
          can do whatever we want with the data!
        </p>
      </div>
    );
  }
}

export default Signup;
