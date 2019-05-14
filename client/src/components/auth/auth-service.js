import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/auth/',
      withCredentials: true
    });
    this.service = service;
   }
  
  signup = (username, password, campus, course, image) => {
    return this.service.post('/signup', {username, password, campus, course, image})
    .then(response => {
      console.log(response.data)
      return response.data
    })
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
  
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }

  edit = () => {
    return this.service.put('/edit/:id', {})
    .then(response => response.data)
  }  

}

export default AuthService;