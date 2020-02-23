import axios from 'axios'
let baseURL = 'http://localhost:3000/auth'
let api = axios.create({
    baseURL,
    credentials: true
})

export const signupForm = async (data) => {
    let user = await api.post('/signup', data)
    return user
}

export const loginForm = async (data) => {
    let loggedUser = await api.post('/login', data)
    return loggedUser
}

export const upload = async (data) => {
    let image = await api.post('/upload', data)
    return image
}

export const editUser = async (data) => {
    let edited = await api.post('/edit', data)
    return edited
}