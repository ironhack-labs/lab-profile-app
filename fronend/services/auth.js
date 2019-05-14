import axios from "axios";
const baseURL = "http://localhost:3000";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    });
  }

  signup = form => {
    return this.service
      .post("/signup", form)
      .then(({ data }) => data)
      .catch(err => err);
  };

  login = form => {
    return this.service
      .post("/login", form)
      .then(response => {
        return response;
      })
      .catch(err => {
        return { err: "Password Incorrect" };
      });
  };
}
export default AuthService;
