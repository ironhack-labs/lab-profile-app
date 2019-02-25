import axios from 'axios';

export default class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true
    })
    this.service = service;
  }
  signup = (username, password, campus, course) => {
    return this.service.post('/signup', { username, password, campus, course })
      .then(response => response.data)
      .catch(err => console.log(err))
  }
}
