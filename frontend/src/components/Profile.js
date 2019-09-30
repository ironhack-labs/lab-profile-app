import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AUTH_SERVICE from './../services/auth'

class Profile extends Component {
  state = {
    user: {}
  }

  componentDidMount = () => {
    if(!localStorage.user) return this.props.history.push('/login')
    this.setState({ user: JSON.parse(localStorage.user)})
  }

  onLogout = async () => {
    await AUTH_SERVICE.logout();
    delete localStorage.user;
    this.props.history.push('/login')
  }

  render() {
    console.log(this.state)
    const { username, campus, course } = this.state.user
    return (
      <div className="container">
        <div className="card">
          <div className="left-side">
            <h2>Profile</h2>
            <div>
              <p>Username</p>
              <p>{username}</p>
            </div>
            <div>
              <p>Campus</p>
              <p>{campus}</p>
            </div>
            <div>
              <p>Course</p>
              <p>{course}</p>
            </div>
            <button onClick={this.onLogout}>Logout</button>
          </div>
          <div className="right-side">
            <div>
              <div className="img-container"><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt={username} /></div>
              <Link to="/profile/edit">Edit</Link>
            </div>
            <div>
              <p>The user is able to upload a new profile photo, using NodeJS and Multer uploader.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Profile