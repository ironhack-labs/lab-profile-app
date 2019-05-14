import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CenteredBox from './CenteredBox';

class Profile extends Component {
  render() {
    const leftPanel = (
      <>
        <h1 className="title">Profile</h1>
        <div>
          <p className="subtitle is-6">Username</p>
          <p className="title is-5">Username</p>

          <p className="subtitle is-6">Campus</p>
          <p className="title is-5">Campus</p>

          <p className="subtitle is-6">Course</p>
          <p className="title is-5">Course</p>
        </div>
        <p>
          <Link to="/signout" className="has-text-danger">
            Logout
          </Link>
        </p>
      </>
    );

    const rightPanel = (
      <>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus quis maiores enim consequatur? Veniam ea sint
            perspiciatis quae ad iusto?
          </p>
        </div>
      </>
    );

    return <CenteredBox leftPanel={leftPanel} rightPanel={rightPanel} />;
  }
}

export default Profile;
