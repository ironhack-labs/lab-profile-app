import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Buttons from "./Style";

const Button = () => {
  return (
    <>
      <Router>
        <Link className="button" to="/signup">
          {/* <Lignup />*/}Signup
        </Link>
        <Link className="button" to="/login">
          {/* <Login />*/}Login
        </Link>
      </Router>
    </>
  );
};

export default Button;
