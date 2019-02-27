import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from "./auth/service"


export default class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false,
          success: true
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <div className="left-column">
          <label htmlFor="username">Username</label>
          <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
          <br />
          <label htmlFor="password">Password</label>
          <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
          <br />
          <p>If you don't have an account yet, you can create your account <Link to="/signup">here</Link></p>

        </div>
        <div className="right-column">
          <h2>Hello!!</h2>
          <p>Awesome to have you at IronProfile again!</p>
          <p>If you login, you agree with all our terms and conditions where we cand
            do whaterver we want with your data!</p>
          <button onClick={this.handleSubmit}>Log in</button>
          <p>{this.state.success ? 'You are logged in' : ''}</p>


        </div>
      </div>
    )
  }
}
