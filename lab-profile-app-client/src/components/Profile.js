import React, { Component } from "react";
import axios from 'axios'


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.user.imageUrl,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  handleFileChange(event) {
    const uploadData = new FormData();
    uploadData.append('imageUrl', event.target.files[0])
    uploadData.append('username', this.props.user.username)
    console.log(uploadData)
    axios.post("http://localhost:5000/auth/upload", uploadData)
    .then(response => this.setState({ imageUrl: response.data.secure_url}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
            <div>
              <h1>Profile</h1>
              <h4>Username</h4>
              <h2>{this.props.user.username}</h2>
              <h4>Campus</h4>
              <h2>{this.props.user.campus}</h2>
              <h4>Course</h4>
              <h2>{this.props.user.course}</h2>
            </div>
            <div>
              <img style={{height:'400px'}}
                src={this.state.imageUrl}
                alt={this.props.user.username}
              />
                <input type="file" onChange={(e) => this.handleFileChange(e)} />
              {/* <button className="button is-small" onClick={this.logoutUser}>
                Logout
              </button> */}
            </div>
          </div>
        ) : (
          <h1>Please login</h1>
        )}
      </div>
    );
  }
}

export default Profile;
