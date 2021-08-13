import {_api} from './api'

export const loginWS = (data) => _api.post("/auth/login", data);
export const signupWS = (data) => _api.post("/auth/signup", data);
export const logoutWS = () => _api.get("/auth/logout");
export const getUser = () => _api.get("/auth/current-user");