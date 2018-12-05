import React, {Component} from 'react';
import {upload} from '../../authService';

class Profile extends Component {
  constructor(){
    super();
      this.state = {
        user: {}
      }
  }

  logout = () => {
    //console.log('Logout')
    localStorage.clear();
    this.props.history.push('/');
  }

  componentWillMount(){
    //console.log(localStorage.getItem('user'))
    if(localStorage.getItem('user') === null){
      this.props.history.push('/');
    }else{
      const user = JSON.parse(localStorage.getItem('user'));
      this.setState({user})
    } 
  }

  handleChange = (e) => {
    const {user} = this.state;
    let field = e.target.name;
    user[field] = e.target.files ? e.target.files[0] : e.target.value;
    this.setState({user})
    //console.log(this.state.user);
    upload(user)
      .then(res => {
        localStorage.setItem('user', JSON.stringify(res.data.user));
        this.setState({user: res.data.user})
      })
      .catch(err => {
        console.log('Error uploading photo =====>', err.response)
      });
  }
  
  render(){
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
            <label htmlFor="profile-picture" className='button'>
              Edit Photo
              <input
                  id='profile-picture'
                  type='file'
                  name='profilePicture'
                  onChange={this.handleChange} />
            </label>
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