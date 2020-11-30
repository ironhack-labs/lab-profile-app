import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Typography, Button } from 'antd';

const { Title, Text } = Typography;

const buttonStyle = {
  margin: '1rem 0',
  width: '80%',
  height: '2.7rem',
  fontSize: '1.2rem',
  display: 'block',
};

const LinkStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

const HomePage = () => {
  return (
    <>
      <div style={{ padding: '2rem 0' }}>
        <Title level={1} style={{ fontSize: '3rem' }}>
          IronProfile
        </Title>
        <Text type="secondary" style={{ fontSize: '1.2rem' }}>
          Today we will create an app with authorization, adding some cool
          styles!
        </Text>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Link style={LinkStyle} to="/signup">
          <Button style={buttonStyle} type="primary" shape="round">
            Sign up
          </Button>
        </Link>
        <Link style={LinkStyle} to="/login">
          <Button style={buttonStyle} type="primary" shape="round">
            Log in
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
