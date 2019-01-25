import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
    withCredentials: true,
});

export class AuthAPI {

    static errorHandler(e) {
        console.error("AUTH API ERROR");
        console.error(e);
        throw e;
    }

    static currentUser(){
        return instance.get('/api/auth/loggedin')
        .then((res) => res.data.user)
        .catch(e=>{
            console.log('Error en loggedin'+e)
        })
    }

    static login(username, password){
        return instance.post('/api/auth/login',{username, password})
        .then((res) => res.data)
        .catch(e=>{
            console.log('Error en Login'+e)
        })
    }

    static signup(username, password, campus, course){
        return instance.post('/api/auth/signup',{username, password, campus, course})
        .then((res) => res.data.user)
        .catch(e=>{
            console.log('Error en SignUp'+e)
        })

    }
    static logout(username, password){
        return instance.get('/api/auth/logout')
        .then((res) => console.log("Logout"))
        .catch(AuthAPI.errorHandler)
    }
}
