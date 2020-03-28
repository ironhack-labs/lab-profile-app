import React from 'react'
import { Link } from "react-router-dom";
import { Container, Card } from "../styles/Layout.styles"
import { Layout as Lay, Breadcrumb } from 'antd';
const { Content, Footer } = Lay;

export const Layout = ({ children }) => (

  <Container >
    <Lay className="layout" style={{
      backgroundColor: 'transparent'
    }}>
      < Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link to="/" >Home</Link></Breadcrumb.Item>
          <Breadcrumb.Item><Link to="/profile" >Profile</Link></Breadcrumb.Item>
        </Breadcrumb>

        <div className="site-layout-content"> <Card>{children}</Card></div>

      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: "transparent" }}>Teresa Pelinski fighting Ants 🐜©2020</Footer>
    </Lay >
  </Container >
);


