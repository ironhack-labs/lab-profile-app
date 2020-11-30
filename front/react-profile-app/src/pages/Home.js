import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Space } from 'antd';
import Home from './pages/Home';

const Home = () => {
  return (
    <>
    <Row>
      <Space direction="vertical">
        <Col width={300}>
          <Button type="primary">
            Sign up
          </Button>
          <Button type="primary">
            Log in
          </Button>
        </Col>
      </Space>
    </Row>
    </>
  )
}

export default Home 