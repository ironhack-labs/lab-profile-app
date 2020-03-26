import React from 'react';
import { Form, SocialContent } from './Signup.styled';
import { Content, SocialContainer } from '../../Layout/Layout.styled';

export const Signup = () => {
  return (
    <SocialContainer>
      <Content>
        <h1>Sign up</h1>
        <Form>
          <label htmlFor="username">Username</label>
          <input type="text" name="password" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <label htmlFor="campus">Campus</label>
          <input type="text" name="campus" />
          <label htmlFor="course">Course</label>
          <input type="text" name="course" />
        </Form>
      </Content>
      <SocialContent>
        <div className="header">
          <p>Hello!!</p>
          <p>Welcome to IronProfile 🌈</p>
        </div>
        <div className="footer">
          <p>
            If you signup, you agree with all our terms and conditions where we
            can do whatever we want with the data
          </p>
          <button>Create the account</button>
        </div>
      </SocialContent>
    </SocialContainer>
  );
};
