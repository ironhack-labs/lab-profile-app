import React from 'react';
import { Row, Col } from 'antd';

const Layout = ({ children }) => {
  return (
    <Row
      gutter={[16, 16]}
      style={{
        width: '80%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Col
        xs={24}
        md={12}
        lg={12}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100%',
        }}
      >
        {children}
      </Col>
      <Col xs={24} md={12} lg={12}>
        <div
          style={{
            boxSizing: 'border-box',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <img
            src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX16842024.jpg"
            alt="homepage"
            style={{ width: '100%!important', height: 'auto' }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Layout;
