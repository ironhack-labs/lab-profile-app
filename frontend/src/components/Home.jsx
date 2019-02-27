import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import('./Home.css')


export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>IronProfile</h1>
        <p>Today we will create an app with authorization, adding some cool styles!</p>
        <Link
          to="/signup">Sign up</Link>

        <br />

        <Link
          to="/login">Log in</Link>

      </div>
    )
  }
}
