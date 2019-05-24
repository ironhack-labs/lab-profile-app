import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImageCard from "./components/common/ImageCard";

class Home extends Component {
  state = {};
  render() {
    return (
      <ImageCard>
        <div>
          <h1 className="primary-bold-color">IronProfile</h1>
          <p className="medium-text">
            Today we we will create an app with authorization, adding some cool
            styles!
          </p>
          <div className="uk-container uk-text-center uk-margin-large-top">
            <div className="uk-margin">
              <Link to="/signup">
                <button className="uk-button button-primary uk-width-1-2 uk-text-bold">
                  Sign up
                </button>
              </Link>
            </div>
            <div className="uk-margin">
              <Link to="/register">
                <button className="uk-button button-primary uk-width-1-2 uk-text-bold">
                  Log in
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div />
      </ImageCard>
    );
  }
}

export default Home;
