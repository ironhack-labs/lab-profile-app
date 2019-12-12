import React, { Component } from 'react'

import {loadUserPicture as loadUserPictureService} from './../Services/authentication';

class Private extends Component {
  constructor(props) {
    super(props);
    this.handleFileChange = this.handleFileChange.bind(this);
  }
  
  /* componentDidUpdate(prevProps) {
    console.log('props did update', prevProps.user.image);
    if (this.props.user.image !== prevProps.user.image) {
     console.log('component did update its different');
     // this.props.loadUserInformation();
    }
  } */

  async handleFileChange(event) {
    event.preventDefault();
    const file = event.target.files[0];
    try {
      await loadUserPictureService(file);
      this.props.loadUserInformation();
    } catch(error) {
     console.log('not possible to load picture in react private view', error);
    }
  }

  render() {
    const user= this.props.user;
    const image = user.image;
    const imageURL = {
      firstPart: image.substring(0, image.indexOf('upload/') + 7), //7 is the number of characters in upload/, so it will include it
      middle: 'w_400,h_400,c_crop,g_face,r_max',
      lastPart: image.split('upload').pop()
      // same result than image.replace('http://res.cloudinary.com/dgmvfq29c/image/upload/', '')
    };
    const imageURLTransformed = imageURL.firstPart + imageURL.middle + imageURL.lastPart;
    return (
      <div className='m-5 text-center d-flex'>
      <div className='w-50 m-3 border border-success p-3 d-flex align-items-center'>
      {user &&  <div className='w-80'><h1>Welcome back {user.username} ! </h1> 
      <br/> 
      <h3>You are studying {user.course} in {user.campus}!</h3></div>}
      </div>
      <div className='w-50 d-flex flex-column m-3 border border-success p-3 align-items-center'>
      <img src={imageURLTransformed} alt="profile picture" className='w-50' style={{"maxWidth": "80%"}}/>
      <div className='custom-file mt-3'>
      <input type="file" className="custom-file-input" id="customFileLang" lang="en" onChange={this.handleFileChange}/>
      <label className="custom-file-label" htmlFor="customFileLang">Upload your profile picture</label>
      </div>
      </div>
      </div>
    )
  }
}


export default Private
