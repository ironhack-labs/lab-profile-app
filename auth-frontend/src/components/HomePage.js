import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HomePage extends Component {
  render() {
    return (
      <div className="window">
        <h1>IronProfile</h1>
        <p className="info">
          Today we will create an app with authoritation, adding some cool
          styles!
        </p>
        <div className="buttons">
          <Link className="green-button" to="/signup">
            Sign up
          </Link>
          <Link className="green-button" to="/login">
            Log in
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
