import React from 'react';
import { Link } from 'react-router-dom';

import { Form, SocialContent } from '../Signup/Signup.styled';
import { Content, SocialContainer } from '../../Layout/Layout.styled';

export const Login = () => {
  return (
    <SocialContainer>
      <Content>
        <h1>Log in</h1>
        <Form>
          <label htmlFor="username">Username</label>
          <input type="text" name="password" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </Form>
        <p className="small">
          If you don't have an account yet, you can create one{' '}
          <Link to="/signup">here</Link>
        </p>
      </Content>
      <SocialContent>
        <div className="header">
          <p>Hello!!</p>
          <p>Awesome to see you again 🎉</p>
        </div>
        <div className="footer">
          <p>
            If you signup, you agree with all our terms and conditions where we
            can do whatever we want with the data
          </p>
          <button>Login</button>
        </div>
      </SocialContent>
    </SocialContainer>
  );
};
