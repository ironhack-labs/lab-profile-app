import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home page">
    <div className="left-panel">
      <div>
        <h1>IronProfile</h1>
        <p>Today we will create an app with authoritation, adding some cool styles!</p>
      </div>
      <div>
        <Link className="button button-green" to="/signup"><strong>Sign up</strong></Link>
        <Link className="button button-green" to="/login"><strong>Log in</strong></Link>
      </div>
    </div>
  </div>
);

export default Home;