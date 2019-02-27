import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>IronProfile</h1>
        <p>Today we will create an app with authoritation, adding some cool styles!</p>
        <Link to={'/signup'}>Sign Up</Link>
        <Link to={'/login'}>Log In</Link>
      </div>
    )
  }
}