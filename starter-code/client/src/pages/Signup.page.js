import React, { useContext, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { UserContext, doSignup } from '../../lib/auth.api';
import { Card } from '../components/Card';
import styled from 'styled-components';
import { useForm, FormContext } from 'react-hook-form';
import { Input, Select } from '../components/Input';

import {
  Left,
  Right,
  TextContainer,
  Title,
  Text,
  ButtonContainer,
  LinkUpdated,
  Button,
  Button2,
  Form,
  TextMinor,
  SubTitle
} from './utils/styles';
import { withProtected } from '../../lib/protectedRoute';

export const SignupPage = withProtected(
  withRouter(({ history }) => {
    const { user, setUser, setLoading } = useContext(UserContext);

    const methods = useForm({
      mode: 'onBlur',
      defaultValue: {
        username: '',
        password: ''
      }
    });

    const { register, handleSubmit, errors } = methods;

    const onSubmit = async data => {
      //console.log(data);
      setLoading(true);
      const newUser = await doSignup(data);
      setUser(newUser);
      setLoading(false);
      history.push('/profile');
    };

    return (
      <Card>
        <Left>
          <Title>Sign Up</Title>
          <FormContext {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name='username'
                placeholder='Username'
                ref={register({
                  required: 'Required *',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address'
                  }
                })}
                type='text'
              />
              <Input
                name='password'
                type='password'
                placeholder='Password'
                ref={register({
                  required: 'Required *'
                })}
              />
              <Select
                name='course'
                ref={register({
                  validate: value => {
                    return value !== '';
                  }
                })}
                options={['WebDev', 'UX/UI', 'Data Analytics']}
              />
              <Select
                name='campus'
                ref={register({
                  validate: value => {
                    return value !== '';
                  }
                })}
                options={[
                  'Madrid',
                  'Barcelona',
                  'Miami',
                  'Paris',
                  'Berlin',
                  'Amsterdam',
                  'México',
                  'Sao Paulo',
                  'Lisbon'
                ]}
              />
              <Button2 type='submit'>Signup</Button2>
            </Form>
          </FormContext>
        </Left>
        <Right>
          <TextContainer>
            <SubTitle>Hello IronHacker!</SubTitle>
            <Text>
              Welcome to IronProfiles, a page done with React and Node to check
              you in!
            </Text>
          </TextContainer>
          <TextMinor>
            If you sign up, you agree with our terms and conditions!
          </TextMinor>
        </Right>
      </Card>
    );
  }),
  {
    redirect: true,
    redirectTo: 'profile',
    inverted: true
  }
);
