import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

import {
  Left,
  TextContainer,
  Title,
  Text,
  ButtonContainer,
  LinkUpdated,
  Button
} from './utils/styles';

export const HomePage = () => {
  return (
    <Card>
      <Left>
        <TextContainer>
          <Title>IronProfile</Title>
          <Text>
            Today we will create an app with auth. Done with React and Express
          </Text>
        </TextContainer>
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
