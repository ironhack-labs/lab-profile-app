import axios from 'axios'

const host = 'http://localhost:3000/auth'


export const signup = (user)=>{
    return axios.post(`${host}/signup`,user,{})
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const login = (user)=>{
    return axios.post(`${host}/login`,user,{withCredentials:true})
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const getProfile = () =>{
    return axios.get(`${host}/profile`,{withCredentials: true})
        .then(r=> r.data)
        .catch(e=> e.response)
}

export const logout = ()=>{
    return axios.get(`${host}/logout`,{withCredentials: true})
        .then(r=> r.data)
        .catch(e=> e.response)
}