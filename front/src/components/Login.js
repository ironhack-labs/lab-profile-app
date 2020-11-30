import react, {useState} from 'react'
import { loginFunction } from '../authService'


function Login({history}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const userInfo = {username, password }
        loginFunction(userInfo)
        history.push("/profile")
    }

    function handleInputs({target: {name, value}}) {
        switch(name) {
            case "username":
            setUsername(value)    
            break
            case "password":
            setPassword(value)    
            break
            default:
                break
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input onChange={handleInputs} name="username" type="text"/>
                <label htmlFor="password">Password:</label>
                <input onChange={handleInputs} name="password" type="password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default Login