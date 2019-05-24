import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageCard from "../common/ImageCard";
import SingUpForm from "./SignUpForm";

class AuthFormContainer extends Component {
  state = {};
  render() {
    return (
      <ImageCard>
        <SingUpForm />
        <div>
          <div className="uk-margin-medium-left">
            <h2 className="uk-margin-remove">Hello!!</h2>
            <h3 className="uk-margin-remove">Welcome to IronProfile</h3>
          </div>
          <div className="uk-container uk-margin-xlarge-top uk-margin-medium-left">
            <div className="uk-width-1-1 uk-text-justify">
              <p>
                If you sign up, you agree with all our terms and conditions
                where we can do whatever we want with the data!
              </p>
            </div>
            <div className="uk-margin">
              <button className="uk-button button-secondary uk-width-1-1 uk-text-bold">
                Create the account
              </button>
            </div>
          </div>
        </div>
      </ImageCard>
    );
  }
}

export default AuthFormContainer;
