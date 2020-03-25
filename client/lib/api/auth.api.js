import axios from "axios";
import _ from "lodash";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const signup = async user => await api.post("/auth/signup", { user });

export const login = async (username, password) =>
  await api.post("/auth/login", {
    username,
    password
  });

export const upload = async file => await api.post("/user/upload", { file });

export const edit = async () => await api.post("/user/edit", { user });

export const logout = async () => await api.get("/auth/logout");

export const loggedin = async () => await api.get("/auth/loggedin");
