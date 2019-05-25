import React, { Component } from "react";
import ImageCard from "../common/ImageCard";
import Profile from "./Profile";
import { upload } from "../../services/authService";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("TOKEN");
    const user = JSON.parse(localStorage.getItem("USER"));
    this.state = {
      user,
      token
    };
  }

  handleUpload = e => {
    const image = e.target.files;
    const formData = new FormData();
    formData.append("image", image);
    upload
      .then(() => {
        this.props.location.push("/profile");
      })
      .catch(error => {
        console.oog(error);
      });
  };

  render() {
    const { user } = this.state;
    return (
      <ImageCard>
        <Profile {...user} handleUpload={this.handleUpload} />
      </ImageCard>
    );
  }
}

export default ProfileContainer;
