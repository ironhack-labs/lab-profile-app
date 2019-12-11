import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div className='text-center border m-5 border-success'>
      <h2>Iron Profile</h2>
      <p>Today we will create an app with authoritation, adding some cool styles!</p>
      <Link to='signup' className="btn btn-success m-3">Sign Up</Link>
      <Link to='login' className="btn btn-success m-3">Log in</Link>
      </div>
    )
  }
}

export default Home
