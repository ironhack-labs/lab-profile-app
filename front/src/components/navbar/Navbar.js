// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import logo from "../../logo-ironhack-blue.png";
import "./Navbar.css";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, isSignup: false };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  changeState() {
    this.setState({
      isSignup: !this.state.isSignup
    });
  }

  render() {
    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
              <a onClick={this.handleLogout}>Logout</a>
 
          <div className="header">
            <h2>Welcome {this.state.loggedInUser.username}</h2>
          </div>
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
              {this.state.isSignup ? (
                <div>
                  <li>
                    <button onClick={() => this.changeState()}>Signup</button>
                  </li>
                  <li>
                    <Login getUser={this.props.getUser} />
                  </li>
                </div>
              ) : (
                <div>
                  <li>
                    <button onClick={() => this.changeState()}>login</button>
                  </li>
                  <li>
                    <Signup getUser={this.props.getUser} />
                  </li>
                </div>
              )}
            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
