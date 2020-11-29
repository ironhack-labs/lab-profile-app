import React from 'react';
import { Button } from 'antd';
import { Divider } from 'antd';

const Home = () => {
  return (
    <div>
      <div className="site-button-ghost-wrapper">
        <h1>IronProfile</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
          merninisti licere mihi ista probare, quae sunt a te dicta? Refert
          tamen, quo modo.
        </p>
        <Button type="primary" ghost>
          Sign up
        </Button>

        <Divider />

        <Button type="primary" ghost>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Home;
