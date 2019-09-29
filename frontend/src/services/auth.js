import axios from 'axios';

const SERVICE = axios.create({ baseURL: 'http://localhost:3000/api/auth', withCredentials: true})

const AUTH_SERVICE = {
  signup: (user) => SERVICE.post('/signup', user),
  login: (user) => SERVICE.post('/login', user),
  logout: () => SERVICE.get('/logout'),
  editUser: (update) => SERVICE.post('/edit', update),
  getUser: () => SERVICE.get('/loggedin')
}

export default AUTH_SERVICE;