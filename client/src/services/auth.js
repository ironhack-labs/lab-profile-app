import axios from "axios"

const baseURL = "http://localhost:3000/auth"

const authService = axios.create({
    baseURL,
    withCredentials:true
})

export const signup = async user => {
    await authService.post("/signup", user)
    return true
}

export const login = async userData => {
    const {data: user} = await authService.post("/login", userData)
    return user
}

export const getCurrentUser = async () => {
    const {data:user} = await authService.get("/currentuser")
    return user
}

export const logoutP = async () => {
    await authService.get("/logout")
}

export const updateProfilePhoto = async photo => {
    await authService.put("/photo", {photo})
}