import axios from 'axios';
let baseURL = 'http://localhost:3000'

const  SERVICE = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await SERVICE.get('/');
  },
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('/login', user);
  },
  logOut: async () => {
    return await SERVICE.get('/logout');
  },
  upload: async (user) => {
    return await SERVICE.post('/upload', user);
  },

edit: async (user) => {
    return await SERVICE.post('/edit', user)
}
};

export default MY_SERVICE;
