import React from "react";

const campus = [
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

const SingUpForm = () => (
  <form>
    <fieldset className="uk-fieldset">
      <legend className="uk-legend primary-bold-color">Sign Up</legend>
      <div className="uk-margin">
        <label className="uk-form-label uk-form-stacked">Username</label>
        <input className="uk-input" type="text" placeholder="e.g. myUserName" />
      </div>
      <div className="uk-margin">
        <label className="uk-form-label uk-form-stacked">Password</label>
        <input
          className="uk-input"
          type="password"
          placeholder="e.g. p4$22%W0_rD"
        />
      </div>
      <div className="uk-margin">
        <label className="uk-form-label uk-form-stacked">Campus</label>
        <select className="uk-select" defaultValue="Select a campus">
          <option disabled>Select a campus</option>
          {campus.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
      <div className="uk-margin">
        <label className="uk-form-label uk-form-stacked">Course</label>
        <select className="uk-select" defaultValue="Select a course">
          <option disabled>Select a course</option>
          {courses.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      </div>
    </fieldset>
  </form>
);

export default SingUpForm;
