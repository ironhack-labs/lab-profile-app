import React, { useContext } from "react";
import axios from "axios";

export const UserContext = React.createContext();

export const useUser = () => {
  const userState = useContext(UserContext);
  return userState.user;
};

export const useUserSetter = () => {
  const userState = useContext(UserContext);
  return userState.setUser;
};

export const useUserIsLoading = () => {
  const userState = useContext(UserContext);
  return userState.loading;
};

export const useUserLogout = () => {
  const userState = useContext(UserContext);
  return async () => {
    userState.setUser(null);
    return logout();
  };
};

const authApi = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true
});

export const signup = async ({ username, password, campus, course }) => {
  const res = await authApi.post("auth/signup", {
    username,
    password,
    campus,
    course
  });
  return res.data;
};

export const login = async ({ username, password }) => {
  const res = await authApi.post("auth/login", {
    username,
    password
  });
  return res.data;
};

// export const upload = async file => {
//   const res = await authApi.post("auth/upload", file);
//   console.log(res);
// };

// export const edit = async ({ username, campus, course }) => {
//   const res = await authApi.post("auth/edit", {
//     username,
//     campus,
//     course
//   });
//   console.log(res);
// };

export const logout = async () => {
  const res = await authApi.post("auth/logout");
  return res.data;
};

export const loggedin = async () => {
  const res = await authApi.get("auth/loggedin");
  return res.data;
};
