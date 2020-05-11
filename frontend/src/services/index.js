import axios from 'axios';

const baseURL = "http://localhost:3000";

const service = axios.create({
  baseURL,
  withCredentials: true,
});

const PROFILE_SERVICE = {
  signup: async (user) => {
    return await service.post('/signup', user);
  },
  login: async (user) => {
    return await service.post('/login', user);
  },
  logout: async () => {
    return await service.get('/logout');
  },
  upload: async (user) => {
    return await service.post('/upload', user);
  },
  edit: async (user) => {
    return await service.post('/edit', user);
  },
};

export default PROFILE_SERVICE;
