import React, { Component } from "react";
import background from "./assets/oval-bg.png";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="uk-container uk-height-large uk-width-1-1 uk-flex uk-flex-center">
        <div className="uk-inline">
          <img src={background} alt={background} />
          <div className="uk-overlay uk-position-cover">
            <div
              className="uk-child-width-1-2 uk-grid-large uk-grid-match"
              uk-grid="true"
            >
              <div>
                <h1 className="primary-bold-color">IronProfile</h1>
                <p className="medium-text">
                  Today we we will create an app with authorization, adding some
                  cool styles!
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
