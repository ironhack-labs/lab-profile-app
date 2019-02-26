import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";
import AddPhoto from "./AddPhoto";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentDidMount() {
    this.setState({...this.state, loggedInUser: this.props.userInSession});
  }


  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  logoutUser = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);
    });
  };

  render() {
    if (this.state.loggedInUser) {
      return (
        <div>
          <h2>Profile</h2>
          <h5>Username:</h5>
          <p>{this.state.loggedInUser.username}</p>
          <h5>Campus:</h5>
          <p>{this.state.loggedInUser.campus}</p>
          <h5>Course:</h5>
          <p>{this.state.loggedInUser.course}</p>

          <AddPhoto />
         
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
