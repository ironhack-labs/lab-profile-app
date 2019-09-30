import axios from "axios";

const authenticationApi = axios.create({
  baseURL: "http://localhost:5000/api/auth"
});

export const signUp = ({ username, password, campus, course }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/signup", { username, password, campus, course })
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const signIn = ({ username, password }) => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .post("/login", { username, password })
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const signOut = () => {
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

export const verify = () => {
  return new Promise((resolve, reject) => {
    authenticationApi
      .get("/loggedin")
      .then(response => {
        resolve(response.data.data.user);
      })
      .catch(error => {
        reject(error);
      });
  });
};
