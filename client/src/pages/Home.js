import React from 'react';
import { Button } from 'antd';

const Home = ({ history }) => {
  return (
    <div className="site-button-ghost-wrapper">
      <h1>IronProfile</h1>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
    </div>
  );
};

export default Home;
