import React, { useState } from "react";
import blankProfile from "../../assets/blank-profile.png";

const campusList = [
  "Madrid",
  "Barcelona",
  "Miami",
  "Paris",
  "Berlin",
  "Amsterdam",
  "México",
  "Sao Paulo"
];

const courses = ["WebDev", "UX/UI", "Data Analytics"];

const Profile = ({
  username,
  campus,
  course,
  image,
  handleSubmit,
  handleLogout,
  handleChange,
  setImage
}) => {
  const [activeCampus, setActiveCampus] = useState(true);
  const [activeCourse, setActiveCourse] = useState(true);
  return (
    <React.Fragment>
      <div>
        <h1 className="primary-bold-color">Profile</h1>

        <div className="uk-margin-bottom">
          <h5 className="uk-margin-remove">Username</h5>
          <div>
            <div className="uk-inline uk-width-1-1">
              <p className="uk-text-bold uk-margin-remove">{username}</p>
            </div>
          </div>
        </div>
        <div className="uk-margin-bottom">
          <h5 className="uk-margin-remove">Campus</h5>
          <div>
            <div className="uk-inline uk-width-1-1">
              <a
                href="#"
                className="uk-form-icon"
                uk-icon="icon: pencil"
                onClick={() => {
                  setActiveCampus(false);
                }}
              />
              <select
                onChange={handleChange}
                className="uk-select small-padding-left"
                name="campus"
                value={campus ? campus : "Select a campus"}
                disabled={activeCampus}
              >
                <option disabled>Select a campus</option>
                {campusList.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="uk-margin-bottom">
          <h5 className="uk-margin-remove">Course</h5>
          <div>
            <div className="uk-inline uk-width-1-1">
              <a
                href="#"
                className="uk-form-icon"
                uk-icon="icon: pencil"
                onClick={() => {
                  setActiveCourse(false);
                }}
              />
              <select
                onChange={handleChange}
                className="uk-select small-padding-left"
                name="course"
                value={course ? course : "Select a course"}
                disabled={activeCourse}
              >
                <option disabled>Select a course</option>
                {courses.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <button
            className="uk-button button-primary uk-width-1-1"
            onClick={handleSubmit}
          >
            Update Profile
          </button>
          <span
            onClick={handleLogout}
            className="uk-flex uk-flex-center uk-margin-small-top logoutLink"
          >
            Logout
          </span>
        </div>
      </div>
      <div>
        <div className="uk-card uk-margin-medium-left">
          <div className="uk-card-media-top uk-text-center">
            <img
              className="uk-border-circle imageProfile"
              src={image ? image : blankProfile}
              alt={username}
            />
          </div>
          <div className="uk-card-body">
            <div className="uk-margin">
              <div uk-form-custom="true" className="uk-width-1-1">
                <input type="file" name="image" onChange={setImage} />
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
};

export default Profile;
