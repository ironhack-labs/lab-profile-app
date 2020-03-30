// dependencies
import React, { useState, useContext } from 'react';

// styled components
import {
  Form,
  SocialContent,
  SocialContainer,
  Button,
  Error
} from '../styles/Signup.styled';
import { Content } from '../styles/Layout.styled';
import { AuthContext } from '../../context/authContext';
import { doSignup } from '../../services/authService';

const Signup = ({ history }) => {
  const { setUser } = useContext(AuthContext);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    campus: '',
    course: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await doSignup(newUser);

    if (response.username) {
      setUser(response);
      history.push('/profile'); //redirect to profile after signup & login
    } else {
      setError(response.message);
    }
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

        {error && <Error>Sorry, {error}</Error>}
      </Content>
      <SocialContent>
        <div className="header">
          <p>Hi!</p>
          <p>Don't waste your time, it's not gonna work.</p>
        </div>
        <div className="footer">
          <p>
            ...
          </p>
          <Button type="submit" form="signup-form">
            Create the account
          </Button>
        </div>
      </SocialContent>
    </SocialContainer>
  );
};

export default Signup;