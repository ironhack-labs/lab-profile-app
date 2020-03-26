import axios from 'axios';

const authService = axios.create({
  baseURL: 'http://localhost:3000/auth',
  withCredentials: true
});

export const signup = async ({ username, password, campus, course }) => {
  console.log('registering with data', username, password, campus, course);
  const response = await authService.post('/signup', {
    username,
    password,
    campus,
    course
  });
  console.log('respuesta del server al signup', response);
};

export const login = async ({ username, password }) => {
  console.log('login user with data', username, password);
  const response = await authService.post('/login', { username, password });
  console.log('respuesta del server al login', response);
};
