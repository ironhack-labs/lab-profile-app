import axios from 'axios';

const baseURL = 'http://localhost:3000/api';
const SERVICE = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  signup: async (username, password, campus, course) => {
    return await SERVICE.post('auth/signup', username, password, campus, course);
  },
  login: async (username, password) => {
    return await SERVICE.post('auth/login', username, password);
  },
  //   upload: async (image) => {
  //     return await SERVICE.post('auth/login', image);
  //   },
  edit: async (username, password) => {
    return await SERVICE.post('auth/edit', username, password);
  },
  logout: async () => {
    return await SERVICE.get('auth/logout');
  },
  loggedin: async () => {
    return await SERVICE.get('auth/loggedin');
  }
};

export default AUTH_SERVICE;