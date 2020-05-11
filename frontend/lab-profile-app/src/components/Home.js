import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Iron Profile</h1>
    <p>This is an app with authoritation</p>
    <Link to={'/signup'}>Sign Up</Link>
    <Link to={'/login'}>Login</Link>
  </div>
);

export default Home;
