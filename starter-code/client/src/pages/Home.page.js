import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import styled from 'styled-components';

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  color: #f7fff7;
  padding: 10px;
`;

const LinkUpdated = styled(Link)`
  text-decoration: none;
  color: #f7fff7;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-self: center;
  margin: 20px 0 0 0;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  align-self: center;
  margin: 10px 0;
  color: #f7fff7;
  border-color: #4ecdc4;
  background-color: #4ecdc4;
  border-style: solid;
`;

const Title = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 10px 0;
`;

const Text = styled.p`
  width: 80%;
  font-size: 1.2rem;
  margin: 5px 0;
  font-weight: 300;
`;

export const HomePage = () => {
  return (
    <Card>
      <Left>
        <Title>IronProfile</Title>
        <Text>
          Today we will create an app with auth. Done with React and Express
        </Text>
        <ButtonContainer>
          <LinkUpdated to='/signup'>
            <Button>Sign Up</Button>
          </LinkUpdated>
          <LinkUpdated to='/login'>
            <Button> Login</Button>
          </LinkUpdated>
        </ButtonContainer>
      </Left>
    </Card>
  );
};
