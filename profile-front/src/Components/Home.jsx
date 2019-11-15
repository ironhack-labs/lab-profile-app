import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>IronProfile</h1>
      <h2>Today we will create an app with authorization, adding some cool styles!</h2>
      <button>
        <NavLink to="/signup">
          Sign up
        </NavLink>
      </button>
      <button>
        <NavLink to="/login">
          Log in
        </NavLink>
      </button>
    </div>
  )
}

export default Home;