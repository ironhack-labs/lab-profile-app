import React, { Component } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Service from "./auth/Service";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.Service = new Service();
  }
  render() {
    return (
      <div className="App">
        <h1>HOME SIN LOGIN</h1>

        <div>
          <Link to="/auth/signup">
            <button type="button">Sign up</button>
          </Link>
        </div>
        <div>
          <Link to="/auth/login">
            <button type="button">Login</button>
          </Link>
        </div>
      </div>
    );
  }
}
