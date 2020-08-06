import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="container-layout">
      <div className="container-left">
        <div className="content-left">
          <h1>IronProfile</h1>
          <p>
            Today we will create an app with authorization, adding some cool
            styles!
          </p>
        </div>
        <div className="content-center">
          <Link to="/signup" className="link">
            Sign up
          </Link>
          <Link to="/login" className="link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
