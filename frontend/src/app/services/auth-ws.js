import {_api} from './api'

export const loginEndpoint = (data) => _api.post("/auth/login", data);

export const signupEndpoint = (data) => _api.post("/auth/signup", data);