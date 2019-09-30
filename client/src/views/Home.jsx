import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomeView extends Component {
  render() {
    return (
      <div>
        <h1>MERN APP BOILERPLATE</h1>
        <Link to="/signin" exact>
          sign in
        </Link>
        <br></br>
        <br></br>
        <Link to="/signup" exact>
          sign up
        </Link>
      </div>
    );
  }
}
