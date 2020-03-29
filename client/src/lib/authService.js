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

const authApi = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true
});

export const signup = async ({ username, password, campus, course }) => {
  const response = await authApi.post("auth/signup", {
    username,
    password,
    campus,
    course
  });
  return response.data;
};

export const login = async ({ username, password }) => {
  const response = await authApi.post("auth/login", {
    username,
    password
  });
  return response.data;
};

// export const upload = async file => {
//   const response = await authApi.post("auth/upload", file);
//   console.log(response);
// };

// export const edit = async ({ username, campus, course }) => {
//   const response = await authApi.post("auth/edit", {
//     username,
//     campus,
//     course
//   });
//   console.log(response);
// };

// export const logout = async () => {
//   const response = await authApi.post("auth/logout");
//   console.log(response);
// };

export const loggedin = async () => {
  const res = await authApi.get("auth/loggedin");
  return res.data;
};
