import React, { useState } from 'react';

function Profile(props) {
  const initialState = {
    showLoadImage: false,
    image: props.user.image,
  };
  const [profile, setProfile] = useState(initialState);
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
      </div>
      <div className="container-right">
        <div className="content-left">
          <img
            src={props.user.image}
            alt={props.user.username}
            className="photo"
          />
          <button className="link-reverse">Edit foto</button>{' '}
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
