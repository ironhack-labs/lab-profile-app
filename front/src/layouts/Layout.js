import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom";
import bg from "../public/oval-bg.png"

const Container = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100vh;
background-image: linear-gradient(to right, #C1DFC4, #DEECDD);

.site-layout-content {
  background-image: url(${bg});
  background-position:center;
  background-repeat:no-repeat;
  padding: 24px;
  height:60vh;
  display:flex;
}
`
const Card = styled.div`
padding:10vh 15vw;

`

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


