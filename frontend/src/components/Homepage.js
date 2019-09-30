import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="main-box">
          <div className="card">
            <div className="columns">
              <div className="column is-half home-box">
                <div>
                  <h1 className="title">Iron Profile</h1>
                  <h2>Today we will create an app with authoritation, adding some cool styles!</h2>
                </div>
                <div>
                  <button className="button is-fullwidth"><Link className="has-text-black" to="/auth/signup">Sign Up</Link></button>
                  <button className="button is-fullwidth"><Link className="has-text-black" to="/auth/login">Log In</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
