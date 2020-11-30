import axios from 'axios'

const baseURL = 'http://localhost:3001/auth'

const authService = axios.create({
  baseURL,
  withCredentials: true
})

export const signupFn = userInfo =>
  authService.post('/signup', userInfo)

export const loginFn = userInfo =>
  authService.post('/login', userInfo)

export const loggedFn = () =>
  authService.get('/logged')

export const logoutFn = () =>
  authService.get('/logout')