import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true
    });
    this.service = service;
  }

  signup = (profile) => {
    return this.service.post('/signup', {profile})
    .then(response => response.data) 
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.post('/logout',)
    .then(response => response.data)
  }

  updateUsername(newUsername) {
    return this.service.put('/update', {username: newUsername})
      .then(res => res.data)
      .catch(err => {
        console.log(err)
      });
  }

}

export default AuthService;