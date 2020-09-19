import axios from 'axios'

const baseURL = 'http://localhost:3000/auth'
const authService = axios.create({
    baseURL,
    withCredentials: true
})

export const signup = async user => {
    await authService.post('/signup', user)
    return true
}

export const login = async userData => {
    const {
        data
    } = await authService.post('/login', userData)
    return data
}

export const edit = async userData => {
    const {
        data
    } = await authService.put('/edit', userData)
    return data
}

export const loggedin = async() => {
    const {
        data
    } = await authService.get('/loggedin')
    return data
}

export const logoutServer = async() => {
    await authService.get('/logout')
    return true
}

export const updatePhoto = async(image) => {
    await authService.put('/upload', {
        image
    })
}