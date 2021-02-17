import axios from 'axios'
require('dotenv').config()

const baseURL = process.env.NODE_ENV === 'production' ? "/auth" : "http://localhost:3001/auth"

const _axios = axios.create({
    baseURL,
    withCredentials: true
})

export const signupFn = (user) => _axios.post('/signup', user);
export const loginFn = (user) => _axios.post('/login', user);
export const logoutFn = (_) => _axios.get('/logout');
export const getCurrentUser = (_) => _axios.get('/loggedin');
export const uploadAvatar = (avatar) =>_axios.post('/upload', avatar);
export const googleInit = () => _axios.get('/google')