import React from "react";
import { NavLink } from "react-router-dom";

export const HomePage = () => (
  <div>
    <p className="title">IronProfile</p>
    <p className="subtitle">Today we will create an app with authoritation, adding some cool styles!</p>
    <NavLink to="/signup" className="button is-warning">
      Sign Up
    </NavLink>
    <NavLink to="/login" className="button is-info">
      Login
    </NavLink>
  </div>
);
