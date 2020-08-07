import axios from 'axios'

class AuthService {
    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials: true
        })
        this.service = service;
    }
    
    signup = (username, password, campus, course) => {
        return this.service.post('/signup', {username, password, campus, course})
        .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/loggedin')
        .then(response => response.data)
    }

    login = (username, password) => {
        return this.service.post('/login', {username, password})
        .then(response => response.data)
    }
    
    logout = () => {
        return this.service.post('/logout', {})
        .then(response => response.data)
    }

    edit = (username, campus, course) => {
        return this.service.post('/edit', {username, campus, course})
        .then(response => response.data)
    }

    upload = (image) => {
        return this.service.post('/upload', image)
        .then(response => response.data)
    }
}

export default AuthService;