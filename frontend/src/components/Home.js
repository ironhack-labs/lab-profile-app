import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeTag = styled.div``;
export default class Home extends Component {
  render() {
    return (
      <HomeTag>
        <h1>IronProfile</h1>
        <h4>Today we will create an app</h4>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
      </HomeTag>
    );
  }
}
