// auth/auth-service.js
import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: false
    });
  }

  signup = (username, password, campus, course) => {
    return this.service.post('/signup', {username, password, campus, course})
    .then(response => {
      console.log(response.data);
      return response.data;
    })
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin',)
    .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/logout',)
    .then(response => response.data)
  }

  addPicture(file) {
    const formData = new FormData();
    formData.append("image", file)
    return this.service
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(err=>{console.log(err) });
  }

}

export default AuthService;