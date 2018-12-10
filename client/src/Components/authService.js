import axios from "axios"
import { Component } from 'react';

class authService extends Component {
    constructor() {
        super()
        const service = axios.create({
            baseURL: 'http://localhost:5000/auth',
            withCredentials: true
        })
        this.service = service;
    }
    signup = (username, password, campus, course) => {
        return this.service.post("/signup", { username, password, campus, course })
            .then(response => response.data)
    }
    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }
    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.get('/logout')
            .then(response => response.data)
    }
}

export default authService;
