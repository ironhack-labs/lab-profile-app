import React, { Component } from 'react'
import AuthService from '../AuthService'

export default class Signup extends Component {
  state = {
    username: '',
    password: '',
    campus: '',
    course: '',
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

    AuthService.signup(this.state)
      .then(({ data: user }) => {
        localStorage.setItem('userId', user._id)
        this.props.history.push('/profile')
      })
      .catch(({ response: { data } }) => {
        this.setState({ message: data.message })
      })
  }

  submitForm = () => {
    this.handleSubmit()
  }

  render() {
    const { username, password, campus, course, message } = this.state

    return (
      <div className="container bg">
        
        <div className="container">
      <div className="jumbotron">
  <h1 className="display-4">Welcome to IronProfile</h1>
</div>
        </div>
        <h5 className="title">Sign up</h5>
        <div className="input-group mb-3">
        <form onSubmit={this.handleSubmit}>
        
          {message && <p>{message}</p>}
          <label >
            Username
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInput}
              className="form-control"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInput}
              className="form-control"
            />
          </label>
          <label>
            Campus
            <input
              type="text"
              name="campus"
              value={campus}
              onChange={this.handleInput}
              className="form-control"
            />
          </label>
          <label>
            Course
            <input
              type="text"
              name="course"
              value={course}
              onChange={this.handleInput}
              className="form-control"
            />
          </label>

          <button type="submit" hidden />
          <button className="button btn-primary" onClick={this.submitForm}>
            Create the Account
          </button>
      

        </form>
        </div>
       
          
          
        </div>
    )
  }
}
