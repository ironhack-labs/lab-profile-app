import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default class HomeView extends Component {
  render() {
    return (
      <Container>
        <h1>MERN APP BOILERPLATE</h1>
        <Link to="/signup">Sing up</Link>
        <Link to="/login">Login</Link>
      </Container>
    );
  }
}
