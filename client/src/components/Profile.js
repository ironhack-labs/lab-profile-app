import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class Profile extends Component {
  logoutUser = props => {
    axios
      .post("/api/logout")
      .then(() => {
        this.props.getUser(null);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <p> Welcome {this.props.userData.username} !</p>
        <p> Username: {this.props.userData.username}</p>
        <p> Course: {this.props.userData.course} </p>
        <p> Campus: {this.props.userData.campus} </p>

        <Link to="/">
          <button onClick={this.logoutUser}>Logout</button>
        </Link>
      </div>
    );
  }
}
export default Profile;
