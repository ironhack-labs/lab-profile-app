import axios from 'axios';

const apiService = axios.create({
  // After proxying
  // baseURL: 'http://localhost:3020/auth'
  baseURL: '/auth'
});

export const signup = async (user) => {
  const { username, password, campus, course } = user;
  const response = await apiService.post('/signup', {username, password, campus, course});
  console.log(response);
  return response;
}

export const login = async (user) => {
  const { username, password } = user;
  const response = await apiService.post('/login', {username, password});
  console.log(response);
  return response;
}

export const upload = async (file) => {
  const data = new FormData();
  data.append('image', file.image);
  const response = await axios.post('http://localhost:3020/auth/upload', {data});
  console.log(response);
}

export const edit = async (username, campus, course) => {
  const response = await axios.post('http://localhost:3020/auth/edit', {username, campus, course});
  console.log(response);
}

export const logout = async () => {
  const response = await axios.post('http://localhost:3020/auth/logout');
  console.log(response);
}

export const loggedin = async () => {
  const response = await axios.get('http://localhost:3020/auth/loggedin');
  console.log(response);
}