import axios from 'axios'

const baseURL = "http://localhost:3000/auth"

const authService = axios.create({
    baseURL,
    withCredentials: true
})

export const loginFunction = userInfo => authService.post('/login', userInfo)

export const uploadFunction = file => authService.post('/upload', file )

export const editFunction = userInfo => authService.post('/edit/:id', userInfo)

export const signupFunction = userInfo => authService.post('/signup', userInfo)

export const loggedinFunction = () => authService.get('/loggedin')

export const logoutFunction = () => authService.get('/logout')