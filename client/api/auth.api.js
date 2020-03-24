import axios from "axios";
import _ from "lodash";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true
});

export const signup = async () => ({ user } = await api.post("/auth/signup"));

export const login = async () => ({ user } = await api.post("/auth/login"));

export const upload = async () => ({ user } = await api.post("/user/upoad"));

export const edit = async () => ({ user } = await api.post("/user/edit"));

export const logout = async () => ({ status } = await api.post("/auth/logout"));

export const loggedin = async () =>
  ({ user } = await api.post("/auth/loggedin"));
