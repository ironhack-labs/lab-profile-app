// upload that makes a POST request to the auth/upload route passing the file,
// edit that makes a POST request to the auth/edit route passing username, campus and course,

import Axios from 'axios';

class AuthService {
  constructor() {
    let service = Axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true,
    });
    this.service = service;
  }

  signup = (username, password, campus, course) => {
    return this.service
      .post('/signup', { username, password, campus, course })
      .then((res) => res.data);
  };

  login = (username, password) => {
    return this.service
      .post('/login', { username, password })
      .then((res) => res.data);
  };

  loggedin = () => this.service.get('/loggedin').then((res) => res.data);

  logout = () => this.service.post('/logout', {}).then((res) => res.data);

  upload = (image) => {
    return this.service.post('/upload', image).then((res) => res.data);
  };

  edit = (username, campus, course) => {
    return this.service
      .post('/edit', { username, campus, course })
      .then((res) => res.data);
  };
}

export default AuthService;
