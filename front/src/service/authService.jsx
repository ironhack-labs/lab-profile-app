import axios from 'axios';

export default class authService {
    constructor() {
        this.service = axios.create({baseURL:'http://localhost:5000/auth'});
    }
    logout = () => {
        return this.service.post('/logout', {})
        .then(response => response.data)
    }

    loggedin = () => {
        return this.service.get('/loggedin').then((response) => response.data);
    };

    login = (username, password) => {
        return this.service.post('/login', {username, password})
        .then(response => response.data)
    }
    
    signup = (infoUsuario) => {
    console.log(infoUsuario)
        return this.service.post("/signup",{...infoUsuario}).then((data) => console.log(data));
    };

    upload = () => {
        return this.service.post('/upload').then((data) => data.data);
    };

    edit = () => {
        return this.service.post('/edit').then((data) => data.data);
    };
    
}