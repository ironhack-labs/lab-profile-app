import axios from 'axios'
const baseURL = 'http://localhost:3001/auth'

const SERVICE = axios.create({ withCredentials: true, baseURL })

const AUTH_SERVICE = {
  signup: async (user) => {
    return await SERVICE.post('/signup', user)
  },
  login: async (user) => {
    return await SERVICE.post('/login', user)
  },
  logOut: async () => {
    console.log("loggin out")
    // this.props.history.push('/auth/login')
    return await SERVICE.get('/logout')
  }
}

export default AUTH_SERVICE