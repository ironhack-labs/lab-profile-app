import axios from "axios";


class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/api/auth",
      withCredentials: true
    })
  }

  signup = (user) => {
    console.log(user)
    // axios.post("http://localhost:5000/api/auth/signup", {user}, {withCredentials: true})
    return this.service.post('/signup', user)
    .then(response => response.data)
  }

  login = (user) => {
    // axios.post("http://localhost:5000/api/auth/login", {user}, {withCredentials: true})
    return this.service.post('/login', user)
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data);
  }

  logout = () => {
    return this.service.get('/logout')
    .then(response => response.data);
  }
}

export default AuthService;