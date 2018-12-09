import axios from "axios";

class AuthService {
    constructor() {
        this.service = axios.create({
            baseURL: "http://localhost:5000/auth",
            withCredentials: true
        })
    }

    signup = (user) => {
        const formData = new FormData();
        Object.keys(user).forEach(key => formData.append(key, user[key]));

        return this.service.post('/signup', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    }

    login = (user) => {
        return this.service.post('/login', user)
    }

    loggedin = () => {
        return this.service.get('/loggedin')
    }

    logout = () => {
        return this.service.get('/logout')
    }
}

export default AuthService;