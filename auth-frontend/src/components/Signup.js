import React, { Component } from 'react';
import AuthService from '../configs/authService';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      campus: '',
      course: '',
    };
    this.service = new AuthService();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const campus = this.state.campus;
    const course = this.state.course;

    this.service
      .signup(username, password, campus, course)
      .then((response) => {
        this.setState({ username: '', password: '', campus: '', course: '' });
        this.props.getTheUser(response);
        this.props.history.push('/profile');
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="window">
        <div className="left-container">
          <h1>Sign up</h1>
          <form className="form">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Campus</label>
            <input
              type="text"
              name="campus"
              value={this.state.campus}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Course</label>
            <input
              type="text"
              name="course"
              value={this.state.course}
              onChange={(e) => this.handleChange(e)}
            />
          </form>
        </div>
        <div className="right-container">
          <h3>Hello!</h3>
          <h2>Welcome to IronProfile!</h2>
          <p className="disclaimer">
            If you signup, you agree with all our terms and conditions where we
            can do whatever we want with the data!
          </p>
          <form onSubmit={this.handleFormSubmit}>
            <input
              className="white-button"
              type="submit"
              value="Create the Account"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
