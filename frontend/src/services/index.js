import axios from 'axios';
let baseURL;

process.env.NODE_ENV === 'production'
  ? (baseURL = 'here should be your production endpoint')
  : (baseURL = 'http://localhost:3000/auth');

const service = axios.create({ withCredentials: true, baseURL });

const AUTH_SERVICE = {
  test: async () => {
    return await service.get('/');
  },
  signup: async (user) => {
    return await service.post('/signup', user);
  },
  login: async (user) => {
    return await service.post('/login', user);
  },
  logOut: async () => {
    return await service.post('/logout');
  },
  loggedIn: async () => {
    return await service.get('/loggedin')
  },
  upload: async image => {
    return await service.post('/upload', image)
  },
  edit: async () => {
    return await service.post('/edit')
  }
};

export default AUTH_SERVICE;
