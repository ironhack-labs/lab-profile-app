import React from 'react';

const Profile = () => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          <h1>Profile</h1>
          <form action="">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input className="input" type="text" placeholder="Here goes the username as value" />
              </div>
              <label className="label">Campus</label>
              <div className="control">
                <input className="input" type="text" placeholder="Here goes the campus as value" />
              </div>
              <label className="label">Course</label>
              <div className="control">
                <input className="input" type="text" placeholder="Here goes the course as value" />
              </div>
            </div>
          </form>
        </div>
        <div className="column">
          <div className="container">
            <figure className="image is-128x128">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="Profile Pic" />
            </figure>
          </div>
          <button className="button">Edit Photo</button>
          <p>The user is able to upload a new profile photo using NodeJS and Multer uploader.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Profile;