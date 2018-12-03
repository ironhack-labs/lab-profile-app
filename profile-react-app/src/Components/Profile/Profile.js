import React, {Component} from 'react';

class Profile extends Component {
  constructor(){
    super();
      this.state = {
        user: {}
      }
  }

  logout = () => {
    console.log('Logout')
  }

  componentWillMount(){
    const user = JSON.parse(localStorage.getItem('user'))
    //console.log(user)
    this.setState({user})
    
  }
  
  render(){
    //console.log(this.state.user)
    const {username, campus, course, profilePicture} = this.state.user;
    return (
      <div>
        <h1>Profile</h1>
        <div>
          <div>
            <label>
              Username
              <p>{username}</p>
            </label>
            <label>
              Campus
              <p>{campus}</p>
            </label>
            <label>
              Course
              <p>{course}</p>
            </label>
          </div>
          <div>
            <p onClick={this.logout}>Logout</p>
          </div>
        </div>
        <div>
          <img src={profilePicture} alt={username} />
          <input
            type='file'
            name='profilePicture' />

            <p>The user is able to upload a new<br/> profile photo using NodeJS and<br/> Multer uploader</p>

        </div>
      </div>
    )
  }
}

export default Profile;