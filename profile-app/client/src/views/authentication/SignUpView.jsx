import React, { Component } from "react";

import { signUp as signUpService } from "./../../services/authentication";

class AuthenticationSignUpView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      campus: "",
      course: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const { username, password, campus, course } = this.state;
    try {
      const user = await signUpService({ username, password, campus, course });
      console.log(user);
      this.props.history.push(`/private`);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleFormSubmission}>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="Campus"
            value={this.state.campus}
            name="campus"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            placeholder="course"
            value={this.state.course}
            name="course"
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
          />
          <button>Sign Up</button>
        </form>
      </main>
    );
  }
}

export default AuthenticationSignUpView;
