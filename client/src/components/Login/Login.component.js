import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Form, SocialContent } from '../Signup/Signup.styled';
import { Content, SocialContainer } from '../../Layout/Layout.styled';
import { login } from '../../services/authService';

export const Login = () => {
  const [currentUser, setCurrentUser] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('submitting form!');
    const user = await login(currentUser);

    console.log('user logged', user);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  return (
    <SocialContainer>
      <Content>
        <h1>Log in</h1>
        <Form onSubmit={handleSubmit} id="login-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={currentUser.username}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={currentUser.password}
            onChange={handleChange}
          />
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
          <button type="submit" form="login-form">
            Login
          </button>
        </div>
      </SocialContent>
    </SocialContainer>
  );
};
