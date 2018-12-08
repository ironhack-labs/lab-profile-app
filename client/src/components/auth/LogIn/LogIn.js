import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from './../AuthService';

export default class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.authService = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    const {username, password} = this.state;

    this.authService.login({username, password})
    .then(user => this.props.getUser(user))
    .catch(err => console.log(err));
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({[name]: value});
  }

  render() {
    return (
      <div>
        <h1>Log In</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username</label>
          <input type="text" name="username" onChange={e => this.handleChange(e)} />

          <label>Password</label>
          <input type="password" name="password" onChange={e => this.handleChange(e)} />

          <input type="submit" value="Login"/>
        </form>

        <Link to="/">Back to Home</Link>

      </div>
    )
  }
}
