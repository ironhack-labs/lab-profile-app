// components/navbar/Navbar.js
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../components/auth/authService";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedUser: null };
    this.service = new AuthService();
    this.logoutUser = this.logoutUser.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (this.props.userInSession !== prevProps.userInSession) {
      this.setState({ loggedUser: this.props.userInSession });
    }
  }
  logoutUser() {
    this.service.logout().then(() => {
      this.setState({ loggedUser: null });
      this.props.getUser(null);
    });
  }
  render() {
    if (this.state.loggedUser) {
      return (
        <nav
          className="navbar is-fixed-top is-mobile"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/profile"
              >
                Profile
              </NavLink>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              Welcome, {this.state.loggedUser.username}
            </div>
            <div className="navbar-item">
              <button className="button is-small" onClick={this.logoutUser}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      );
    } else {
      return (
        <nav
          className="navbar is-fixed-top is-mobile"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-menu">
            <div className="navbar-start">
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="navbar-item"
                activeClassName="is-active"
                to="/signup"
              >
                Signup
              </NavLink>
            </div>
          </div>
        </nav>
      );
    }
  }
}
export default Navbar;