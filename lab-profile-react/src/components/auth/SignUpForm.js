import React, { useState } from "react";
import { pwdValidator } from "../../utils/utils";

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

const SignUpForm = ({ username, password, campus, course, handleChange }) => {
  const [validPassword, setvalidPassword] = useState(true);
  return (
    <form>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend primary-bold-color">Sign Up</legend>
        <div className="uk-margin" tabIndex="0">
          <label className="uk-form-label uk-form-stacked">Username</label>
          <input
            onChange={handleChange}
            className="uk-input"
            type="text"
            placeholder="e.g. myUserName"
            name="username"
            value={username}
            required
          />
        </div>
        <div className="uk-margin uk-animation-toggle" tabIndex="1">
          <label className="uk-form-label uk-form-stacked">Password</label>
          <input
            onChange={handleChange}
            onBlur={e => {
              setvalidPassword(pwdValidator(e.target.value));
            }}
            className={`uk-input ${
              !validPassword ? "uk-form-danger uk-animation-shake" : ""
            }`}
            type="password"
            placeholder="e.g. p4$22%W0_rD"
            name="password"
            value={password}
            required
          />
          <div uk-drop="pos: right-center">
            <div className="uk-card uk-card-small uk-card-body uk-card-default uk-text-justify">
              Password must have at least 8 characters, uppercase letters,
              numbers, symbols and not have spaces
            </div>
          </div>
        </div>
        <div className="uk-margin" tabIndex="2">
          <label className="uk-form-label uk-form-stacked">Campus</label>
          <select
            onChange={handleChange}
            className="uk-select"
            name="campus"
            value={campus ? campus : "Select a campus"}
            required
          >
            <option disabled>Select a campus</option>
            {campusList.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className="uk-margin" tabIndex="3">
          <label className="uk-form-label uk-form-stacked">Course</label>
          <select
            onChange={handleChange}
            className="uk-select"
            name="course"
            value={course ? course : "Select a course"}
            required
          >
            <option disabled>Select a course</option>
            {courses.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
      </fieldset>
    </form>
  );
};

export default SignUpForm;
