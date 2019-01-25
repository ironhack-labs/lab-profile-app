import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AuthAPI } from "../lib/auth";

const _Nav = ({ user ,dispatch}) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {!user ? (
                <React.Fragment>
                  <Link to="/signup" className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                  <Link to="/login" className="button is-light">
                    Log in
                  </Link>
                </React.Fragment>
              ) : (
                <button onClick={()=>AuthAPI.logout().then(e=>dispatch({type:"LOGOUT"}))} className="button is-warning">Logout</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Nav = connect(store => ({ user: store.user }))(_Nav);
