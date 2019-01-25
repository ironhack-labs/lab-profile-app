import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 3000,
  withCredentials: true
});
export class AuthAPI {
  static errorHandler(e) {
    console.error("AUTH API ERROR");
    console.error(e);
    throw e;
  }

  static signup(user) {
    return instance
      .post("/auth/signup", user)
      .then(res => res)
      .catch(AuthAPI.errorHandler);
  }
  static login(username, password) {
    return instance
      .post("/auth/login", { username, password })
      .then(res => res)
      .catch(AuthAPI.errorHandler);
  }

  static upload(file) {
    return instance
      .post("/auth/image", file, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => res)
      .catch(AuthAPI.errorHandler);
  }
}
