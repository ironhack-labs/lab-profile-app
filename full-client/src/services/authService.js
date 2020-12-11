import axios from 'axios';

const baseURL = 'http://localhost:3000/auth';

const authService = axios.create({
  baseURL,
  withCredentials: true,
});

export const signup = async (userData) => {
  return authService.post('/signup', userData);
};
export const login = async (userData) => {
  return authService.post('/login', userData);
};

export const upload = async (photo) => {
  return authService.post('/upload', photo);
};

export const logout = async () => {
  return authService.get('/logout');
};
export const loggedin = async () => {
  return authService.get('/loggedin');
};
