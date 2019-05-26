import React, { Component } from "react";
import ImageCard from "../common/ImageCard";
import Profile from "./Profile";
import { upload } from "../../services/authService";
import { getImagePreview } from "../../utils/utils";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    let token = localStorage.getItem("TOKEN");
    let user = JSON.parse(localStorage.getItem("USER"));
    if (token === null || user === null) props.history.push("/");
    this.state = {
      user,
      token
    };
  }

  handleUpload = e => {
    upload
      .then(user => {
        this.setState({ user });
        this.props.history.push("/profile");
      })
      .catch(error => {
        console.oog(error);
      });
  };

  setImage = e => {
    const image = e.target.files;
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
          setImage={this.setImage}
        />
      </ImageCard>
    );
  }
}

export default ProfileContainer;
