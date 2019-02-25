import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps")
    console.log(nextProps["userInSession"])
    console.log("")
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    console.log("render profile")
    console.log(this.state.loggedInUser)
    console.log("")
    if (this.state.loggedInUser) {
      return (
        <div>
          Hola
          <h1>Welcome, {this.state.loggedInUser.username}</h1>
          <Link to="/">
            <button onClick={() => this.logoutUser()}>Logout</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <h1>User no logged</h1>
        </div>
      );
    }
  }
}
