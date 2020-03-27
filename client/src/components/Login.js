// dependencies
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// local modules
import { login } from '../services/authService';
import { AuthContext } from '../contexts/authContext';

// styled components
import {
  Form,
  SocialContent,
  SocialContainer,
  Button
} from '../styles/Signup.styled';
import { Content } from '../styles/Layout.styled';

export const Login = ({ history }) => {
  const [currentUser, setCurrentUser] = useState({
    username: '',
    password: ''
  });
  const { user, setUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('submitting form!');
    const loggedUser = await login(currentUser);

    console.log('user logged', user);
    setUser(loggedUser);
    const formatted = loggedUser.username.replace(' ', '').toLowerCase();
    console.log(formatted);

    history.push(`/${formatted}`);
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
          <Button type="submit" form="login-form">
            Login
          </Button>
        </div>
      </SocialContent>
    </SocialContainer>
  );
};
