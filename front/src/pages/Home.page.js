import React from "react";
import { Typography, Col, Row } from 'antd';
const { Title, Text } = Typography;
import { Btn } from '../components/Btn'



export const HomePage = () => (
  <Row gutter={[16, 16]}>
    <Col span={12}>
      <Title>IronProfile</Title>
      <Text style={{ padding: "5vh 0" }}>Today we will create an app with authorization, adding some cool styles!</Text>
      <Btn to="/signup">Sign Up</Btn>
      <Btn to="/login">Log in</Btn>
    </Col>
  </Row>

);
