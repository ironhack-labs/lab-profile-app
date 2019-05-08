// auth/auth-service.js
import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true
    });
  }

  signup = (username, password, campus, course) => {
    return this.service.post('/signup', {username, password, campus, course})
    .then(response => {
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

  uploadPicture(props) {
    const formData = new FormData();
    formData.append("username", props.username);
    formData.append("image", props.image[0]);
    return this.service
      .post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => response.data )
      .catch(
          err => err.data
      )

  }

}

export default AuthService;