import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BlogNavbar = props => {
  return (
    <Navbar>
      <Link className="btn" to="/">
        Blog
      </Link>
      {(!props.user && (
        <Fragment>
          <Link className="btn" to="/sign-in">
            Sign In
          </Link>
          <Link className="btn" to="/sign-up">
            Sign Up
          </Link>
        </Fragment>
      )) || (
        <Fragment>
          <span className="btn">{props.user.name}</span>
          <Link className="btn" to="/post/create">
            + Create a Post
          </Link>
          <Form onSubmit={props.signOut}>
            <Button type="submit">Sign Out</Button>
          </Form>
        </Fragment>
      )}
    </Navbar>
  );
};

export default BlogNavbar;
