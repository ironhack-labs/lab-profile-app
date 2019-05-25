import React from "react";
import blankProfile from "../../assets/blank-profile.png";

const Profile = ({ username, campus, course, image, handleUpload }) => (
  <React.Fragment>
    <div>
      <h1 className="primary-bold-color">Profile</h1>
      <div className="uk-margin-bottom">
        <h5 className="uk-margin-remove">Username</h5>
        <p className="uk-margin-remove uk-text-bold uk-text-large">
          {username}
        </p>
      </div>
      <div className="uk-margin-bottom">
        <h5 className="uk-margin-remove">Campus</h5>
        <p className="uk-margin-remove uk-text-bold uk-text-large">{campus}</p>
      </div>
      <div className="uk-margin-bottom">
        <h5 className="uk-margin-remove">Course</h5>
        <p className="uk-margin-remove uk-text-bold uk-text-large">{course}</p>
      </div>
    </div>
    <div>
      <div className="uk-card uk-margin-medium-left">
        <div className="uk-card-media-top uk-text-center">
          <img
            className="uk-border-circle"
            width="200px"
            hieght="200px"
            src={image ? image : blankProfile}
            alt={username}
          />
        </div>
        <div className="uk-card-body">
          <div className="uk-margin">
            <div uk-form-custom="true" className="uk-width-1-1">
              <input type="file" onChange={handleUpload} />
              <button
                className="uk-button button-secondary uk-text-bold uk-width-1-1"
                type="button"
                tabIndex="-1"
              >
                Edit photo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-container uk-margin-small-top uk-margin-medium-left">
        <div className="uk-width-1-1 uk-text-justify">
          <p>
            The user is able to upload a new profile photo, using NodeJS and
            Multer uploader
          </p>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default Profile;
