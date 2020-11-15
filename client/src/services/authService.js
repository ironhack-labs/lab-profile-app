import axios from 'axios'

class AuthService {
    constructor(){
        let service = axios.create({
            baseURL: 'http://localhost:5000/',
            withCredentials:true
        })
        this.service = service
    }


    signup = (username,password,campus,course) => {
        return this.service.post('/auth/signup', {username,password,campus,course})
        .then(response => response.data)
    }

    login = (username,password)=>{
        return this.service.post('/auth/login',{username,password})
        .then(response=>response.data)
    }

    edit = (username, campus, course) => {
        return this.service.put('auth/edit', {username, campus, course})
        .then(response => response.data)
      }

    
  loggedin = () => {
    return this.service.get('auth/loggedin')
    .then(response => response.data)
  }

  logout = () => {
    return this.service.post('auth/logout')
    .then(response => response.data)
  }


  imageUpload = (img) => {
    return this.service.post('/auth/avatar',img)
    .then((response)=> response.data)
  };


}







export default AuthService