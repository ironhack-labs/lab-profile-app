import axios from 'axios';

const baseURL = 'http://localhost:3000/auth';

const authService = axios.create({
  baseURL,
  withCredentials: true,
});

export const signupFunction = (userInfo) =>
  authService.post('./signup', userInfo);
export const loginFunction = (userInfo) => authService.post('/login', userInfo);
export const uploadFunction = (file) => authService.post('./upload', file);
export const updateFunction = (userInfo) => authService.post('./edit', userInfo);
export const logoutFunction = () => authService.post('./logout');
export const currentUserFunction = () => authService.get('./current-user');
