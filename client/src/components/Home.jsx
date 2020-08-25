import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container d-flex flex-row">
      <div className="container-element d-flex flex-column justify-content-around">
        <div>
          <h2>IronProfile</h2>
          <h5>
            Today we will create an app with authoritation, adding some cool
            styles!
          </h5>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Link className="btn btn-iron-profile m-4" to="/signup">
            Sign up
          </Link>
          <Link className="btn btn-iron-profile" to="/login">
            Log in
          </Link>
        </div>
      </div>
      <div className="container-element"></div>
    </div>
  );
}

export default Home;
