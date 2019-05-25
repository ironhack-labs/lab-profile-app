import React from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ username, password, handleChange }) => {
  return (
    <form>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend primary-bold-color">Log in</legend>
        <div className="uk-margin" tabIndex="0">
          <label className="uk-form-label uk-form-stacked">Username</label>
          <input
            onChange={handleChange}
            className="uk-input"
            type="text"
            placeholder="e.g. myUserName"
            name="username"
            value={username}
          />
        </div>
        <div className="uk-margin uk-animation-toggle" tabIndex="1">
          <label className="uk-form-label uk-form-stacked">Password</label>
          <input
            onChange={handleChange}
            className="uk-input"
            type="password"
            placeholder="e.g. p4$22%W0_rD"
            name="password"
            value={password}
          />
        </div>
        <div className="uk-margin">
          <p className="uk-text-justify uk-width-1-1">
            if you don't have an account yet, you can create an account &#8200;
            <Link to="/signup">here</Link>
          </p>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;
