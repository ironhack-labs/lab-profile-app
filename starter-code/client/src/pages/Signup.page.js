import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { UserContext, doSignup } from '../../lib/auth.api';
import { Card } from '../components/Card';
import styled from 'styled-components';
import { useForm, FormContext } from 'react-hook-form';
import { Input } from '../components/Input';

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 50%;
  color: #f7fff7;
  padding: 10px;
`;

const Right = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  color: #f7fff7;
  padding: 10px;
`;

const Title = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  margin: 10px 0;
`;

const Text = styled.p`
  width: 80%;
  font-size: 1.5rem;
  margin: 40px 0;
  font-weight: 300;
`;

const TextContainer = styled.div`
  margin: 10px 0;
`;

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

const Button = styled.button`
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  align-self: center;
  color: #f7fff7;
  border-color: #4ecdc4;
  background-color: #4ecdc4;
  border-style: solid;
`;

export const SignupPage = withRouter(({ history }) => {
  const { user, setUser, setLoading } = useContext(UserContext);

  const methods = useForm({
    mode: 'onBlur',
    defaultValue: {
      username: '',
      password: '',
      course: '',
      campus: ''
    }
  });

  const { register, handleSubmit, errors } = methods;

  const onSubmit = async data => {
    //console.log(data);
    setLoading(true);
    const newUser = await doSignup(data);
    console.log('new user', newUser);
    setUser(newUser);
    console.log('user', user);
    setLoading(false);
    history.push('/');
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
            />
            <Input
              name='password'
              type='password'
              placeholder='Password'
              ref={register({
                required: 'Required *'
              })}
            />
            <Input
              name='course'
              placeholder='Course'
              ref={register({
                required: 'Required *'
              })}
            />
            <Input
              name='campus'
              placeholder='Campus'
              ref={register({
                required: 'Required *'
              })}
            />
            <Button type='submit'>Login</Button>
          </Form>
        </FormContext>
      </Left>
      <Right>
        <TextContainer>
          <Title>Welcome to IronProfile</Title>
          <Text>
            Today we will create an app with auth. Done with React and Express
          </Text>
        </TextContainer>
      </Right>
    </Card>
  );
});
