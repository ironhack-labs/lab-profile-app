import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeView extends Component {
  render() {
    return (
      <div className="container">
        <h1>MERN APP BOILERPLATE</h1>
        <Link to="/login">
          <span className="btn btn-primary mx-2">Log in</span>
        </Link>

        <Link to="/signup">
          <span className="btn btn-primary mx-2">Sign up</span>
        </Link>
      </div>
    );
  }
}
