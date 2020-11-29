import axios from 'axios'

const baseURL= 'http://localhost:3001/auth'

const authService= axios.create({
    baseURL,
    withCredentials:true
})

export const singUpFn= userInfo=>
authService.post('/signup', userInfo)

export const loginFn= userInfo=>
authService.post('/login', userInfo)

export const editUserFn= userInfo=>
authService.post('/edit/:id', userInfo)

export const currentUserFn= userInfo=>
authService.get('/loggedin')

export const logoutFn= userInfo=>
authService.get('/logout')
