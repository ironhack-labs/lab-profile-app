import {createContext,useState,useEffect} from 'react';
import {getUser,logoutWS} from '../services/auth-endpoint'
export const Ctx = createContext();

export const AppCtxProv = props => {
    const [user,setUser] = useState(null)

    //me sirve para modificar el usuario
                //si es 1 propiedad, puede ir sin parenteiss (user)
    const login = user => setUser(user) //inicia sesion

    const logout = () => (setUser(null),logoutWS() )//cierra sesion

    useEffect(()=>{
        async function checkSession(){
            try{
                const {data} = await getUser()
                setUser(data.result._id ? data.result : null)
            }catch(error){
                console.log("hubo error",error)
                setUser(null)
            }
        }
        checkSession() //ejecutamos la funcion asincrona
    },[]);

    const value = {
        user,
        login,
        logout
    }

return <Ctx.Provider {...props} value={value}/>

}