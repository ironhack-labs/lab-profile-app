import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <h1>Log In</h1>

        <Link to="/">Back to Home</Link>

      </div>
    )
  }
}
