import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import LinkButton from '../Commun/LinkButton';

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
      <div className='main-card'>
        <div className='card-left'>
          <div className='profile-data-field'>
            <h1>Profile</h1>
          </div>
          <div>
            <label className='label profile-data-field'>
              Username
              <p className='profile-data'>{username}</p>
            </label>
            <label className='label profile-data-field'>
              Campus
              <p className='profile-data'>{campus}</p>
            </label>
            <label className='label profile-data-field'>
              Course
              <p className='profile-data'>{course}</p>
            </label>
          </div>
          <div className='profile-logout'>
            <p onClick={this.logout}>Logout</p>
          </div>
        </div>
        <div className='card-rigth'>
          <div className='picture-box'>
            <img className='profile-picture' src={profilePicture} alt={username} />
            <Link to='' className='button main-card-link'>
              <LinkButton className='button' name='Edit Photo' />
            </Link>
          </div>
          <div>
            <p className='small-text'>The user is able to upload a new<br/> profile photo using NodeJS and<br/> Multer uploader</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;