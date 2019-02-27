import axios from "axios";

export default class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/auth",
      withCredentials: true
    });
  }

  signup = user => {
    return this.service.post("/signup", user).then(response => response.data);
  };

  login = user => {
    return this.service.post("/login", user).then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/currentUser").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => response.data);
  };
}
