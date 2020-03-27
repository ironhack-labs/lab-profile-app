import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Buttons from "./Style";

const Button = () => {
  return (
    <>
      <nav>
        <Link to="/" className="button">
          Home
        </Link>
        <Link to="/signup" className="button">
          Signup
        </Link>
        <Link to="/login" className="button">
          Login
        </Link>
      </nav>{" "}
    </>
  );
};

export default Button;
