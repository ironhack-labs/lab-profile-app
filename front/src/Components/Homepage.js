import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>IronProfile</h1>
      <p>Today we will create an app with authorization, adding some cool styles!</p>
      <button><Link to="/signup">Sign up</Link></button>
      <button><Link to="/login">Log in</Link></button>
    </div>
  )
}

export default Homepage;