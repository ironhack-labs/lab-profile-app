import axios from 'axios';

const baseURL = 'http://localhost:3000';

const authService = axios.create({
  baseURL,
  withCredentials: true,
});

// 1. Signup
export const signupFn = (userInfo) => {
  console.log(1);
  authService.post('/signup', userInfo);
};

export const loginFn = (userInfo) => authService.post('/login', userInfo);

export const currentUserFn = () => authService.get('/current-user');

export const logoutFn = () => authService.get('/logout');
