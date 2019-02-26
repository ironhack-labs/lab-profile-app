import axios from 'axios';

export default class authService {
    constructor() {
        this.service = axios.create({baseURL:'http://localhost:5000/auth'});
    }
    logout = () => {
        return this.service.get('/logout').then((data) => data.data);
    };

    loggedin = (beer) => {
        return this.service.get('/loggedin', { ...beer }).then((newBeer) => newBeer);
    };

    login = (beer) => {
        return this.service.post(`/login`).then((infoBeer) => infoBeer);
    };
    
    //
    signup = (user) => {
        return this.service.post(`/signup`, {...user}).then((newUser) => newUser);
    };

   upload = () => {
        return this.service.post(`/upload`).then((randomBeer) => randomBeer);
    };

   edit = () => {
        return this.service.post(`/edit`).then((randomBeer) => randomBeer);
    };
    
}