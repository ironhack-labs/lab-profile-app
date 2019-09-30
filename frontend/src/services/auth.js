
import axios from 'axios';
const baseURL = 'http://localhost:3000/api';

const SERVICE = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('/auth/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('/auth/login', user);
  },
  logOut: async () => {
    return await SERVICE.get('/auth/logout');
  }
};

export default AUTH_SERVICE;