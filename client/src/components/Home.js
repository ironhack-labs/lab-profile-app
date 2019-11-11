import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/signup">
          <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2">
            Login
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
