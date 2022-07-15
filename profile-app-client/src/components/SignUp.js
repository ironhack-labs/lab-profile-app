import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API_URL = 'http://localhost:5005';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('');
  const [course, setCourse] = useState('');
  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleCampus = (e) => setCampus(e.target.value);
  const handleCourse = (e) => setCourse(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/api/auth/signup`, {
        username,
        password,
        campus,
        course,
      });
      console.log(response);
      if (response.status === 201) {
        navigate('/profile');
      }
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
      <div>
        <label htmlFor="campus">Campus: </label>
        <input
          type="campus"
          name="campus"
          id="campus"
          value={campus}
          onChange={handleCampus}
        />
      </div>
      <div>
        <label htmlFor="course">Course: </label>
        <input
          type="course"
          name="course"
          id="course"
          value={course}
          onChange={handleCourse}
        />
      </div>
      <button>Create the Account</button>
    </form>
  );
};

export default Signup;
