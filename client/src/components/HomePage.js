import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import AuthService from "./Tools";

export default class HomePage extends Component {
  constructor(){
    super()

    this.state = {
      user: null
    };

    this.authService = new AuthService();
  }

  

  render() {
    
    return (
      <div className="ironprofile">
        <h1>IronProfile</h1>
        <p>Today we will create an app with authoritation, adding some cool styles</p>
        <Link to='/login'><button type="button" >LOGIN</button></Link>
        <Link to='/signup'><button type="button">SIGNUP</button></Link>
      </div>
    )
  }
}
