import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from 'antd';
const { Title, Text } = Typography;
import { Btn } from '../components/Btn'
import styled from "styled-components";

const Col = styled.div`
width:30vw;
display:flex;
display-direction:column;
flex-wrap:wrap;
`

export const HomePage = () => (
  <Col>
    <Title>IronProfile</Title>
    <Text style={{ padding: "5vh 0" }}>Today we will create an app with authorization, adding some cool styles!</Text>
    <Btn to="/signup">Sign Up</Btn>
    <Btn to="/login">Log in</Btn>
  </Col>

);
