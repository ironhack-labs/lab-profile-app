import React, { useEffect, useContext } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Card } from '../components/Card';
import { UserContext } from '../../lib/auth.api';

import {
  Left,
  TextContainer,
  Title,
  Text,
  ButtonContainer,
  LinkUpdated,
  Button
} from './utils/styles';
import { withProtected } from '../../lib/protectedRoute';

export const HomePage = withProtected(
  withRouter(({ history }) => {
    const { user, setLoading } = useContext(UserContext);
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
  }),
  {
    redirect: true,
    redirectTo: 'profile',
    inverted: true
  }
);
