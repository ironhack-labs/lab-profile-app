import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BlogNavbar = props => {
  return (
    //still missing the photo edit
    <Navbar>
      <Link className="btn" to="/">
        Home
      </Link>
      {(!props.user && (
        <Fragment>
          <Link className="btn" to="/signin">
            Sign In
          </Link>
          <Link className="btn" to="/signup">
            Sign Up
          </Link>
        </Fragment>
      )) || (
        <Fragment>
          <span className="btn">{props.user.name}</span>
          <Form onSubmit={props.signOut}>
            <Button type="submit">Sign Out</Button>
          </Form>
        </Fragment>
      )}
    </Navbar>
  );
};

export default BlogNavbar;
