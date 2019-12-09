import React, { Component } from 'react';
import { StyleProfile } from '../styled-components/components';
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  state = {
    profile: {
        id: "1",
       email: "CR7",
        campus: "Lisboa",
        course: "Data",
    }
  }

  render() {
    const { profile } = this.state
    console.log(profile)
    return (
      <StyleProfile>
      {/* style component en lugar del div padre */}
        <div>
          <h1>Profile</h1>
          <h4>Username</h4>
          <h2>{profile.email}</h2>
          <h4>Campus</h4>
          <h2>{profile.campus}</h2>
          <h4>Course</h4>
          <h2>{profile.course}</h2>
          <Link>Logout</Link>
        </div>
        <div className='img-profile'>
          <img src="https://stafforgserv.com.au/wp-content/uploads/2018/09/user-img.png"
           alt="lol"/>
           <button>Edit Photo</button>
           <p>The user is able to upload a new profile photo, using NodeJS and Multer uploader</p>
        </div>
      </StyleProfile>
      
    )
  }
  
}