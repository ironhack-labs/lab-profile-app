import React, { useContext } from 'react';          // Import React as for any React-Component, as well as the hook useContext
import { NavLink } from 'react-router-dom';         // Import NavLink to allow navigation without refreshing the page
import { AppContext } from '../AppContext';         // Import the context to use it within this component
import { logout } from '../Services/auth-service';  // Import logout function
import { useHistory } from 'react-router-dom'       // Import useHistory hook to allow quicker navigation

const Nav = () => {
  const { user, resetContext } = useContext(AppContext);  // Destructure user and resetContext from Context
  const { push } = useHistory();                          // Destructure push from useHistory

  const handleLogout = () => {
    logout();           // Execute logout function, which erases the token from localStorage
    push('/home');      // "Redirect" to home using push function from useHistory (without refreshing page)
    resetContext();     // Reset the context: we change the user data in the context to an empty object
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item">
            <strong>IronProfile</strong>
          </NavLink>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            
            { user._id ? (
              <div className="buttons">
                <NavLink to="/signup" className="button is-primary" onClick={handleLogout} >
                  <strong>Logout</strong>
                </NavLink>
              </div>
              ) : (
              <div className="buttons">
                <NavLink to="/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </NavLink>
                <NavLink to="/login" className="button is-light">
                  Log in
                </NavLink>
              </div>
              )
            }
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;