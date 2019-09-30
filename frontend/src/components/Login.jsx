import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../AuthService'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    message: null
  }

  handleInput = ({ target: input }) => {
    const { name, value } = input;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    if (e) e.preventDefault()

    AuthService.login(this.state)
      .then(({ data: user }) => {
        localStorage.setItem('userId', user._id)
        this.props.history.push('/profile')
      })
      .catch(({ response: { data } }) => {
        this.setState({ message: data.message })
      });
  };

  submitForm = () => {
    this.handleSubmit()
  };

  render() {
    const { username, password, message } = this.state
return (
    <div className="container bg">
      <div className="container">
      <div className="jumbotron">
  <h1 className="display-4">Welcome to IronProfile</h1>
</div>
        </div>
        <h1 className="title">Login</h1>
        <form onSubmit={this.handleSubmit}>
          {message && <p>{message}</p>}
          <label >
            Username
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInput}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInput}
            />
          </label>
          <button className="button btn-primary" onClick={this.submitForm}>
            Log in
          </button>
          <button type="submit" hidden />
        </form>
        <p>
          If you don't have an account, please sign up {' '}
          <Link to="/signup">here</Link>.
        </p>
      
         
      
        </div>
    )
    
  }
}
