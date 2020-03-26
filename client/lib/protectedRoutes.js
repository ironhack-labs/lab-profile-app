import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export const withoutLogged = (Component, { redirectTo = "/profile" } = {}) =>
  connect(state => ({ user: state.user }))(({ user }) => {
    return user ? <Redirect to={redirectTo} /> : <Component />;
  });

export const withLogged = (Component, { redirectTo = "/" } = {}) =>
  connect(state => ({ user: state.user }))(({ user }) =>
    user ? <Component /> : <Redirect to={redirectTo} />
  );
