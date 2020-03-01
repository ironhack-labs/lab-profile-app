import { Link } from "react-router-dom";
import React, { Component } from "react";

const HomePage = () => {
  return (
    <div>
      <h1>IronProfile</h1>
      <h3>
        Today we will create an app with authoritation, adding some cool styles!
      </h3>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};
export default HomePage;
