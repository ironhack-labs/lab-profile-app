import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <nav>
      {(!props.user && (
        <Fragment>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </Fragment>
      )) || <button onClick={props.signOut}>Sign out</button>}
    </nav>
  );
};

export default NavBar;
