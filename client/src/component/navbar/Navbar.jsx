import React, { Component } from "react";
import { Link } from "react-router-dom";
import Service from "../auth/Service";
import "./Navbar.css";
import EditProfile from "../auth/EditProfile";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new Service();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="navbar">
          <ul>
            <li>{this.state.loggedInUser.username}</li>
            <li>
              <a onClick={this.handleLogout}>Logout</a>
            </li>
            <li>
              <Link to="/editprofile/:id" />
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
