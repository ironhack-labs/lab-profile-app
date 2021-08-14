import {createContext, useState, useEffect} from 'react'
import {getUserEndpoint} from '../services/user_ws'

export const Ctx = createContext();

export const AppCtxProv = (props) => {
    const [user, setUser] = useState(null)

    //Servirá para modificar el user al login:
    const login = (user) => setUser(user)

    //Servirá para poner como null el user al logout
    const logout = () => setUser(null)

    useEffect(() => {
        async function checkSession(){
            try{
                const {data} = await getUserEndpoint()
                console.log("De esta forma llega la data :", data)
                setUser(data.result._id ? data.result : null)
            }catch(error){
                console.log("error context", error)
                setUser(null)
            }
        }
        checkSession()
    }, [])

    const value = {
        user,
        login,
        logout
    }

    return <Ctx.Provider {...props} value={value} />
}