import React from 'react';
import { Link } from 'react-router-dom';

import CenteredBox from './CenteredBox';

const Home = () => {
  const leftPanel = (
    <>
      <div>
        <h1 className="title">IronProfile</h1>
        <h2 className="subtitle">
          Today we will create an app with authorization, adding some cool
          styles.
        </h2>
      </div>
      <div>
        <Link to="/signup" className="button is-block is-success">
          Sign up
        </Link>
        <br />
        <Link to="/login" className="button is-block is-success">
          Log in
        </Link>
      </div>
    </>
  );

  return <CenteredBox leftPanel={leftPanel} />;
};

export default Home;
