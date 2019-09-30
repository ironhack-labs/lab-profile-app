import axios from 'axios'
const baseURL = 'http://localhost:3001/query'

const SERVICE = axios.create({ withCredentials: true, baseURL })
const DATA_SERVICE = {
  findAllData: async (queryString) => {
    const promise = new Promise((resolve, reject) => {
      resolve(SERVICE.post('/find', queryString))
    })
    const result = await promise
    console.log("result: " + Object.keys(result))
    return result
  }
}

export default DATA_SERVICE