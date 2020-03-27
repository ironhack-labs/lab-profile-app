import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from 'antd';
const { Title, Text } = Typography;

export const HomePage = () => (
  <>
    <Title>IronProfile</Title>
    <Text>Today we will create an app with authorization, adding some cool styles!</Text>
    <Link to="/signup"><Button type="primary">Sign up</Button></Link>
    <Link to="/login"><Button type="primary">Log in</Button></Link>
  </>


);