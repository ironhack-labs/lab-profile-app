import axios from 'axios'

class AuthService {

    constructor() {
        let service = axios.create({
            baseURL: 'http://localhost:3000/auth',
            withCredentials: true
        });
        this.service = service;
    }

    signup = (username, password, campus, course) => {
        return this.service.post('/signup', { username, password ,campus, course})
            .then(response => response.data)
    }

    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    upload=()=>{
        return this.service.post('/upload', {})
        .then(response => response.data)
    }

    edit=(username, campus , course)=>{
        return this.service.post('/edit', {username, campus , course})
    }


    logout = (file) => {
        return this.service.post('/logout', {file})
            .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }

   

   

}

export default AuthService;