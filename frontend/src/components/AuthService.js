import axios from 'axios';

export default class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true,
    })
  }

  signup(info) {
    return this.service
      .post("/signup", info)
      .then(response => response.data);
  }

  login(info) {
    console.log(info)
    return this.service
      .post("/login", info)
      .then(response => response.data);
  }

  loggedin() {
    return this.service.get("/loggedin")
      .then(response => response.data);
  }

  logout() {
    return this.service.get("/logout")
      .then(response => response.data);
  }
}