import axios from 'axios'

const baseURL = 'http://localhost:3000'

const service = axios.create({
  baseURL,
  withCredentials: true
})

const AUTH_SERVICE = {
  signup: data => {
    return service.post('/signup', data)
  },
  login: data => {
    return service.post('/login', data)
  },
  getUser: () => {
    return service.get('/profile')
  },
  logout: () => {
    return service.get('/logout')
  }
}

export default AUTH_SERVICE