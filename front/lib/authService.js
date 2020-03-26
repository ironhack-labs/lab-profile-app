import React, { useContext } from "react";
import axios from "axios";

export const UserContext = React.createContext();

export const useUser = () => {
  const userState = useContext(UserContext);
  return userState.user;
};

export const useUserSetter = () => {
  const userState = useContext(UserContext);
  console.log(userState);
  return userState.setUser;
};

export const useUserIsLoading = () => {
  const userState = useContext(UserContext);
  return userState.loading;
};

export const useUserLogout = () => {
  const userState = useContext(UserContext);
  return async () => {
    console.log("log out Crack");

    userState.setUser(null);
    return doLogout();
  };
};

const api = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true
});

export const doSignup = async (username, password, campus, course) => {
  console.log("Registrandote crack");

  console.log(username, password, campus, course);
  const res = await api.post("/auth/signup", {
    username,
    password,
    campus,
    course
  });
  console.log("Usuario creado");
  console.log(res.data);
  return res.data;
};

export const doLogin = async (username, password) => {
  console.log("haciendo Login");
  console.log(username, password);
  const res = await api.post("/auth/login", {
    username,
    password
  });
  console.log("usuario logueado");
  console.log(res.data);
  return res.data;
};

export const doEdit = async (username, campus, course) => {
  console.log("entrando en el perfil del usuario");
  console.log(username, campus, course);
  const res = await api.post("/auth/edit");
  console.log(res.data);
  return res.data;
};

export const doUpload = async image => {
  console.log("entrando en el cambio de imagen");
  console.log(image);
  const res = await api.post("/auth/upload");
  console.log(res.data);
  return res.data;
};

export const doLogout = async () => {
  const res = await api.get("/auth/logout");
  console.log("Se ha deslogueado");
  console.log(res.data);
  return res.data;
};

export const whoami = async () => {
  const res = await api.get("/auth/whoami");
  console.log(res.data);
  return res.data;
};

export const doLoggedin = async () => {
  const res = await api.get("/auth/loggedin");
  console.log(res.data);
  return res.data;
};
