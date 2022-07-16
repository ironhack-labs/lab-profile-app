import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext); // Get the stored token from the localStorage
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/api/auth/signin`, {
        username,
        password,
      });

      storeToken(data);
      //authenticateUser();
      navigate('/profile');
    } catch (error) {}
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={handleUsername}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <button>Log in</button>
    </form>
  );
};

export default Signin;
