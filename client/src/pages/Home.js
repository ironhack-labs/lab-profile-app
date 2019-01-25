import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../lib/redux/actions";
import { AuthAPI } from "../lib/auth";
import { connect } from "react-redux";

export const HomePage = connect(state => ({ user: state.user }))(
  ({ user, dispatch }) => (
    <div className="section">
      <div className="container">
        <div className="columns box">
          <div className="column is-three-fifths is-mobile">
            <p className="title">IronProfile</p>
            <p className="subtitle">
              Today we will create an app with authoritation, adding some cool
              styles!
            </p>
            {user ? (
              <button
                className="button is-danger"
                onClick={() => AuthAPI.logout().then(() => dispatch(logout()))}
              >
                Logout
              </button>
            ) : (
              <React.Fragment>
                <NavLink to="/signup" className="button is-warning">
                  Sign Up
                </NavLink>
                <NavLink to="/login" className="button is-info">
                  Login
                </NavLink>
              </React.Fragment>
            )}
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  )
);
