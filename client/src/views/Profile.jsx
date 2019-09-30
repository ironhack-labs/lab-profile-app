import React, { Component } from "react";
import Container from "react-bootstrap/Container";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return (
      <Container>
        <h1>Your Profile</h1>
        <h2>{this.props.user.username}</h2>
      </Container>
    );
  }
}
