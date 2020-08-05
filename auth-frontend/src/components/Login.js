import React, { Component } from 'react';
import AuthService from '../configs/authService';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    this.service
      .login(username, password)
      .then((response) => {
        this.setState({ username: '', password: '' });
        this.props.getTheUser(response);
        this.props.history.push('/profile');
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="window">
        <div className="left-container">
          <h1>Log in</h1>
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
          </form>
        </div>
        <div className="right-container">
          <h3>Hello!</h3>
          <h2>Awesome to have you at IronProfile again!</h2>
          <p className="disclaimer">
            If you signup, you agree with all our terms and conditions where we
            can do whatever we want with the data!
          </p>
          <form onSubmit={this.handleFormSubmit}>
            <input className="white-button" type="submit" value="Log In" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
