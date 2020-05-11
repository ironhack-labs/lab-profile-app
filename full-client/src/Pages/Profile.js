import React, { Component } from 'react';
import { upload } from '../services/authService';

export class Profile extends Component {
  state = {
    username: '',
    campus: '',
    course: '',
    imgUrl: '',
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleFileInput = (e) => {
    const photo = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append('photo', photo);
    console.log(photo);
    upload(uploadData)
      .then((res) => {
        console.dir(res);
        this.setState({ imgUrl: res.data.secure_url });
      })
      .catch((err) => console.log(err));
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

        <form>
          <input
            type="file"
            name="photo"
            onChange={(e) => this.handleFileInput(e)}
            id="photo"
          />
          <input type="submit" value="Upload Photo" />
        </form>
      </>
    );
  }
}

export default Profile;
