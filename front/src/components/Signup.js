import react, {useState} from 'react'
import { signupFunction } from '../authService'


function Signup({history}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [campus, setCampus] = useState("")
    const [course, setCourse] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const userInfo = {username, password, campus, course}
        signupFunction(userInfo)
        history.push("/login")
    }

    function handleInputs({target: {name, value}}) {
        switch(name) {
            case "username":
            setUsername(value)    
            break
            case "password":
            setPassword(value)    
            break
            case "campus":
            setCampus(value)    
            break
            case "course":
            setCourse(value)    
            break
            default:
                break
        }
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input onChange={handleInputs} name="username" type="text"/>
                <label htmlFor="password">Password:</label>
                <input onChange={handleInputs} name="password" type="password"/>
                <label htmlFor="campus">Campus:</label>
                <select onChange={handleInputs} name="campus">
                    <option value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Miami">Miami</option>
                    <option value="Paris">Paris</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="México">México</option>
                    <option value="Sao Paulo">Sao Paulo</option>
                    <option value="Lisbon">Lisbon</option>
                </select>
                <label htmlFor="course">Course:</label>
                <select onChange={handleInputs} name="course">
                    <option value="Web Dev">Web Development</option>
                    <option value="UX/UI">UX/UI</option>
                    <option value="Data Analytics">Data Analytics</option>
                </select>
                <input type="submit" value="Sign up"/>
            </form>
        </div>
    )
}

export default Signup