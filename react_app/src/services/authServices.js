import axios from 'axios'

const baseURL = 'http://localhost:3000/auth'

const MY_SERVICE = axios.create({
  withCredentials: true,
  baseURL
})

const AUTH_SERVICE = {
  signup: async data => {
    return await MY_SERVICE.post('/signup', data)
  },
  login: async data => {
    return await MY_SERVICE.post('/login', data)
  },
  uploadPhoto: async photo => {
    return await MY_SERVICE.post('/upload', photo)
  },
  edit: async data => {
    return await MY_SERVICE.post('/edit', data)
  },
  logout: async data => {
    return await MY_SERVICE.post('/logout')
  },
  loggedIn: async data => {
    return await MY_SERVICE.get('/loggedin')
  }

}

export default AUTH_SERVICE
