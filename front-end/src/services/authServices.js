import axios from 'axios';

export default class authService {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:5000/auth",
            withCredentials: true
        });
    }
    getLogin = user => {
        return this.service.post('/login', { ...user })
            .then(response => response.data)
    }

    setSignup = user => {
        return this.service.post('/signup', { ...user })
            .then(response => response.data)
    }

    getLogout = () => {
        return this.service.get('/logout')
            .then(response => response.data)
    }

    getLoggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }

    setEditUser = user => {
        return this.service.put('/edit', { ...user })
        .then(response => response.data)
    }
}