import axios from 'axios';
let baseURL = 'http://localhost:3001'

const service = axios.create({ withCredentials: true, baseURL });

const authService = {
  signup: async (user) => {
    return await service.post('/auth/signup', user);
  },
  login: async (user) => {
    return await service.post('/auth/login', user);
  },
  upload: async (user) => {
    return await service.post('/auth/upload', user);
  },
  edit: async (user) => {
    return await service.post('/auth/edit', user);
  },
  logOut: async () => {
    return await service.get('/auth/logout');
  },
  loggedin: async () => {
    return await service.get('/auth/loggedin');
  }
};

export default authService;