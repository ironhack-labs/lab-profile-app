import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { upload } from '../services/authService';

export class Profile extends Component {
  state = {
    username: '',
    campus: '',
    course: '',
    imgName: '',
    imgUrl: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handileFileInput = (e) => {
    const photo = e.target.files[0];
  };

  componentDidMount = async () => {};

  render() {
    return (
      <>
        <h1>Profile</h1>
        <h4>Username</h4>
        <p>{this.state.username}</p>
        <h4>Campus</h4>
        <p>{this.state.campus}</p>
        <h4>Course</h4>
        <p>{this.state.course}</p>
        <img src={this.state.imgUrl} alt="" />

        <input
          type="file"
          name="photo"
          onChange={this.handileFileInput}
          id="photo"
        />
        <input type="submit" value="Upload Photo" />
      </>
    );
  }
}

export default Profile;
