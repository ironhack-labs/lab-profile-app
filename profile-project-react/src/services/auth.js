import axios from "axios"

const baseURL  = "http://localhost:3000/auth"
const authService = axios.create({
    baseURL,
    withCredentials: true
})

export const signup =async user =>{
    await authService.post("/signup", user)
    return true
}

export const login = async userData => {
    const {data: user} = await authService.post("/login", userData)
    return user
}

export const getCurrentUser = async () => {
    const {data: user} = await authService.get("/loggedin")
    return user
}

export const logoutProcess = async () => {
    await authService.post("/logout")
}


export const uploadPhoto = async (image) => {
    await authService.post("/upload", { image })
}


