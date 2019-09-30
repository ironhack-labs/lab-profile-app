import axios from "axios";

const authenticationApi = axios.create({
  baseURL: "/auth"
});

export const signUp = ({ username, password, campus, course }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/signup", { username, password, campus, course })
      .then(response => {
        console.log(response);
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const login = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/login", { username, password })
      .then(response => {
        //response.data.data.user ?? console log and check
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const logout = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/logout")
      .then(response => {
        resolve();
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const loggedin = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .get("/loggedin")
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
