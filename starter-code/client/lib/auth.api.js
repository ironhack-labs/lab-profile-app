import axios from 'axios';
import React, { useContext } from 'react';

export const UserContext = React.createContext();

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true
});

export const doSignup = async ({ username, password, course, campus }) => {
  const res = await api.post('/auth/signup', {
    username,
    password,
    course,
    campus
  });
  return res.data;
};

export const doLogin = async (username, password) => {
  const res = await api.post('/auth/signup', {
    username,
    password
  });
  return res.data;
};

export const doUpload = async file => {
  const data = new FormData();
  data.append('image', file);
  const res = await api.post('/auth/upload', data);
  return res.data;
};

export const doEdit = async (username, course, campus) => {
  const res = await api.post('/auth/signup', {
    username,
    course,
    campus
  });
  return res.data;
};

export const doLogout = async () => {
  const res = await api.post('/auth/logout', data);
  return res.data;
};

export const getUserLogged = async () => {
  const res = await api.get('/auth/loggedin');
  return res.data;
};
