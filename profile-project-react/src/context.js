import React, {createContext, useState, useEffect} from 'react'
import {getCurrentUser} from "./services/auth"

export const Context = createContext()

export default function OurProvider({children}){
    const [user, setUser] = useState(null)

    async function getSession(){
        const { user } = await getCurrentUser()
        if(user?.email){
            loginUser(user)
        }
    }

    useEffect(()=>{
        getSession()
    },[] )

    function loginUser(user){
        setUser(user)
    }
    function logout(user){
        setUser(null)
    }

    return (
      <Context.Provider
      value={{
          user,
          loginUser,
          logout
      }}
      >
          {children}

      </Context.Provider>
    )
}


