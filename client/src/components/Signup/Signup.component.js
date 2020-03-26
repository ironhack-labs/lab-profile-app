import React, { useState } from 'react';
import { Form, SocialContent } from './Signup.styled';
import { Content, SocialContainer } from '../../Layout/Layout.styled';
import { signup } from '../../services/authService';

export const Signup = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    campus: '',
    course: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('submitting!');
    await signup(newUser);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <SocialContainer>
      <Content>
        <h1>Sign up</h1>
        <Form onSubmit={handleSubmit} id="signup-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={newUser.name}
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
          <label htmlFor="campus">Campus</label>
          <input
            type="text"
            name="campus"
            value={newUser.campus}
            onChange={handleChange}
          />
          <label htmlFor="course">Course</label>
          <input
            type="text"
            name="course"
            value={newUser.course}
            onChange={handleChange}
          />
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
          <button type="submit" form="signup-form">
            Create the account
          </button>
        </div>
      </SocialContent>
    </SocialContainer>
  );
};
