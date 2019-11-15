import React from 'react';

const Profile = () => {
  return (
    <div className="section">
      <div className="columns">
        <div className="column">
          <h1>Profile</h1>
          <form action="">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input class="input" type="text" placeholder="Here goes the username as value" />
              </div>
              <label class="label">Campus</label>
              <div class="control">
                <input class="input" type="text" placeholder="Here goes the campus as value" />
              </div>
              <label class="label">Course</label>
              <div class="control">
                <input class="input" type="text" placeholder="Here goes the course as value" />
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