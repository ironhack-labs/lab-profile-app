import axios from "axios";

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:5000/auth",
      withCredentials: true
    });
    this.service = service;
  }

  errorHandler = err => {
    // console.error(err);
    throw err;
  };

  handleUpload = theFile => {
    return this.service.post('/upload', theFile)
      .then(res => res.data)
      .catch(this.errorHandler);
  }
  
  signup = (username, password, campus, course) => {
    return this.service
      .post("/signup", { username, password, campus, course })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/login", { username, password })
      .then(response => response.data);
  };

  logout = () => {
    return this.service.post("/logout", {}).then(response => response.data);
  };
}

export default AuthService;

//Es una clase que recoge todos los servicios que hay en la API(backend). Los servicios que me ofrece son por ejemplo, 
//signup, login, logout..etc.
