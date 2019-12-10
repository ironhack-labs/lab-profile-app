import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./HomePage.scss";

class HomePage extends Component {
  render() {
    return (
      <div className="totalBox">
        <div className="homeBoxes">
          <img src="./oval-bg.png" alt="here should be the background" />
          <h2>IronProfile</h2>
          <article>Today we will create an app with authorization</article>
          <Link to="/SignUp">Sign up</Link>
          <Link to="/LogIn">Log In</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
