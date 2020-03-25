import React from "react";
import { Redirect } from "react-router-dom";

export const withProtected = (
  Component,
  { redirectTo = "/login" } = {}
) => () => {
  const user = undefined;

  return user ? <Component /> : <Redirect to={redirectTo} />;
};
