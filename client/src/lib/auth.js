import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 2000,
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

  static login(username, password){
    const user={username,password}
    return instance.post('/auth/login',user)
    .then((res) => res)
    .catch(AuthAPI.errorHandler)
}

  static upload(file) {
    return instance
      .post("/auth/image", file, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      .then(res => res)
      .catch(AuthAPI.errorHandler);
  }

  static logout(){
    return instance.get("/auth/logout").then(e=>e)
  }

  static currentUser(){
    return instance.get('/auth/currentuser')
    .then((res) => res.data.user)
    .catch(AuthAPI.errorHandler)
}
}
