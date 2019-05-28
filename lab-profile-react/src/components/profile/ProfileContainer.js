import React, { Component } from "react";
import ImageCard from "../common/ImageCard";
import Profile from "./Profile";
import { edit, loggedin } from "../../services/authService";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem("TOKEN");
    let user = JSON.parse(localStorage.getItem("USER"));
    loggedin(token)
      .then(data => {})
      .catch(error => {
        if (error.err.message === "jwt expired") this.handleLogout();
      });

    if (token === null || user === null) props.history.push("/");
    this.state = {
      user,
      token
    };
  }

  handleChange = e => {
    const field = e.target.name;
    let { user } = this.state;
    user[field] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = e => {
    let { formData } = this.state;
    const { user } = this.state;
    const { campus, course } = user;
    if (!formData) {
      formData = new FormData();
    }
    formData.append("campus", campus);
    formData.append("course", course);

    edit(formData)
      .then(data => {
        const { updatedUser } = data;
        localStorage.setItem("USER", JSON.stringify(updatedUser));
        this.setState({ updatedUser });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogout = e => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER");
    let { user, token } = this.state;
    user = {};
    token = "";
    this.setState({ user, token });
    this.props.history.push("/");
  };

  setImage = e => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      let { user } = this.state;
      user.image = reader.result;
      this.setState({ user });
      this.setState({ formData });
    };
  };

  render() {
    const { user } = this.state;
    return (
      <ImageCard>
        <Profile
          {...user}
          handleUpload={this.handleUpload}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleLogout={this.handleLogout}
          setImage={this.setImage}
        />
      </ImageCard>
    );
  }
}

export default ProfileContainer;
