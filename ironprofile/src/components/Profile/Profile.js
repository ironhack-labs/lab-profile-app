import React, { Component } from 'react';
import { loggedin, upload, logout } from '../../authService';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    let token = localStorage.getItem(`token`);

    if (!token) return this.props.history.push(`/login`);

    loggedin(token)
            .then( res => this.setState({ user: res.data }) )
            .catch( err => console.log(err) );
  }

  clickHandler = () => (
    logout(this.props.history)
  )

  changeHandler = e => {
    let {user} = this.state,
        id     = user._id;

    user.image = e.target.files[0];

    upload(user, id)
          .then(res => this.setState({ user: res.data }) )
          .catch( err => console.log(err) );
  }

  render() {
    const { user } = this.state;

    delete user.password;
    delete user.__v;

    return (
      <div className="profile page">
        <div className="left-panel">
          <div>
            <h1>Profile</h1>
          </div>
          <div>
            { Object.keys(user).map( (item, index) => (
              <div key = { index }>
                { item === `image` || item === `_id`
                  ? null
                  : <div className="user-info">
                      <h3>{ item }</h3>
                      <p><b>{ user[item] }</b></p>
                    </div>
                }
              </div>
            ))}
          </div>
          <div className="logout">
            <span onClick={this.clickHandler}><b>Logout</b></span>
          </div>
        </div>
        <div className="right-panel">
          <div>
            <div
              className = "img-wrapper"
              style     = {{
                background: `center / cover no-repeat url('${user.image}') transparent`
              }}>
            </div>
            <form>
              <input
                type     = "file"
                name     = "image"
                accept   = ".png, .jpeg, .jpg, .gif, .webp"
                multiple = { false }
                capture  = "user"
                onChange = { this.changeHandler } />
            </form>
          </div>
          <div>
            <p>The user is able to upload a new profile photo, using NodeJS and Multer uploader.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;