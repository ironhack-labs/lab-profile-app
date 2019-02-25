import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth-service';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { username: '', password: '' }
    this.service = new AuthService();
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({ username: '', password: '' })
      })
      .catch(err => console.log(err))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <form onSubmit={this.handleFormSubmit}>

          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />

          <input type="submit" value="Log in" />

        </form>
        <p>Don't you have an account?
          <Link to={"/signup"}> Sign up</Link>
        </p>
      </div>
    )
  }
}