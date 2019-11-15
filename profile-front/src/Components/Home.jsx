import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          <div className="container">
            <h1>IronProfile</h1>
            <h2>Today we will create an app with authorization, adding some cool styles!</h2>
          </div>
          <div className="container">
            <button className="Button">
              <NavLink to="/signup">
                Sign up
              </NavLink>
            </button>
            <button className="Button">
              <NavLink to="/login">
                Log in
              </NavLink>
            </button>
          </div>
        </div>
        <div className="column">

        </div>
      </div>
    </div>

  )
}

export default Home;