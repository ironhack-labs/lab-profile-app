import React, { Component } from 'react';
import AuthService from '../configs/authService';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      username: '',
      campus: '',
      course: '',
      image: '',
      file: '',
    };
    this.service = new AuthService();
  }

  componentDidMount() {
    this.setState({
      _id: this.props.user._id,
      username: this.props.user.username,
      campus: this.props.user.campus,
      course: this.props.user.course,
      image: this.props.user.image,
      file: null,
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const campus = this.state.campus;
    const course = this.state.course;

    this.service
      .edit(username, campus, course)
      .then((response) => {
        this.setState(response);
        this.props.getTheUser(response);
        this.props.history.push('/profile');
      })
      .catch((error) => console.log(error));
  };

  handleImageChange = (event) => {
    event.preventDefault();
    const uploadData = new FormData();
    uploadData.append('image', this.state.file);

    this.service
      .upload(uploadData)
      .then((response) => {
        this.setState(response);
        this.props.getTheUser(response);
        this.props.history.push('/profile');
      })
      .catch((err) => console.log(err));
  };

  handleFileUpload = (event) => {
    this.setState({
      ...this.state,
      file: event.target.files[0],
    });
  };

  handleLogOut;

  render() {
    return (
      <div className="window">
        <div className="left-container">
          <h1>Profile</h1>
          <form className="form">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Campus</label>
            <input
              type="text"
              name="campus"
              value={this.state.campus}
              onChange={(e) => this.handleChange(e)}
            />
            <label>Course</label>
            <input
              type="text"
              name="course"
              value={this.state.course}
              onChange={(e) => this.handleChange(e)}
            />
          </form>
          <div className="row-container">
            <form onSubmit={this.handleFormSubmit}>
              <input
                className="white-button"
                type="submit"
                value="Save the Changes"
              />
            </form>
            <div className="red-link">
              <Link
                style={{
                  color: 'red',
                  fontSize: '18px',
                  textDecoration: 'none',
                }}
                to="/logout"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
        <div className="right-container">
          <img
            key={this.state.image}
            className="image-profile"
            src={this.state.image}
            alt={this.state.username}
          />
          <form onSubmit={this.handleImageChange}>
            <input type="file" name="image" onChange={this.handleFileUpload} />
            <input className="white-button" type="submit" value="Edit Photo" />
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
