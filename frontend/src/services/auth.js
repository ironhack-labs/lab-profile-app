import axios from 'axios'


const SERVICE = axios.create({withCredentials:true, baseURL: 'http://localhost:3000/auth'})

const AUTH_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('/signup', user);
  },
  login: async (user) => {
    return await SERVICE.post('/login', user);
  },
  logOut: async () => {
    return await SERVICE.post('/logout');
  },
  edit: async (user) => {
    return await SERVICE.post('/edit', user)
  },
  loggedin: async () => {
    return await SERVICE.get('/loggedin')
  },
  
};

export default AUTH_SERVICE;