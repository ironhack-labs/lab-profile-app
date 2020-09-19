import React, { createContext, useState, useEffect } from 'react'
import { loggedin } from './services/auth'

export const Context = createContext()

export default function OurContext({ children }) {
    const [user, setUser] = useState(null)

    async function getSession() {
        const user = await loggedin()
        if (user.username) {
            loginUser(user)
        }
    }

    useEffect(() => {
        getSession()
    }, [])

    function loginUser(user) {
        setUser(user)
    }

    function logout() {
        setUser(null)
    }

    return (
        <Context.Provider value={{
            user,
            loginUser,
            logout
        }}>
            { children}
        </Context.Provider >
    )
}
