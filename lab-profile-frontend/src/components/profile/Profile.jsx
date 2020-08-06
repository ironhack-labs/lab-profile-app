import React, { useState } from 'react';
import UploadFoto from '../uploadphoto/UploadFoto';
import { Link } from 'react-router-dom';

function Profile(props) {
  const [image, setImage] = useState(props.user.image);
  const handleImage = (image) => {
    setImage(image);
    props.callback(props.user);
  };
  return (
    <div className="container-layout">
      <div className="container-left">
        <div className="content-left">
          <h1>Profile</h1>
          <div className="form-field">
            <label htmlFor="username">Username</label>
            <span className="profile-data">{props.user.username}</span>
          </div>
          <div className="form-field">
            <label htmlFor="campus">Campus</label>
            <span className="profile-data">{props.user.campus}</span>
          </div>
          <div className="form-field">
            <label htmlFor="course">Course</label>
            <span className="profile-data">{props.user.course}</span>
          </div>
        </div>
        <div>
          <Link to="/logout" className="link-logout">
            Logout
          </Link>
        </div>
      </div>
      <div className="container-right">
        <div className="content-left">
          <img src={image} alt={props.user.username} className="photo" />
          <UploadFoto onUpload={handleImage} image={props.user.image} />
        </div>
        <div className="content-center">
          <p>
            The user is able to upload a new profile photo, using NodeJS and
            Multer uploader.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
