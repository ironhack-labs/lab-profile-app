import React, { useState, useContext }  from 'react';

import Input from '../../components/Input/Input';
import AuthService from '../../components/AuthService';
import './Login.scss'
import { UserContext } from '../../UserContext'

const service = new AuthService();


const Login = ({history}) => {
    
        let [ username, setUsername ] = useState('');  
        let [ password, setPassword ] = useState('');
        let { setUser } = useContext(UserContext);
        
        const handleNameInput = e => setUsername(e.target.value);    
        const handlePasswordInput = e => setPassword(e.target.value);
    
        const handleSubmit = (e) => {
            e.preventDefault()
            service.login({
                username,
                password
            })
            .then( user => {
                setUser(user);
                history.push('/profile');
            })
            .catch( error => console.log(error))
        }

       return <div className="container--form">
            <form className="form form--login" onSubmit={(e) => handleSubmit(e)}>
                <Input 
                    name="username" 
                    type="text" 
                    handleInputChange={handleNameInput}
                    value={username}
                    auth="login"
                >
                    Username
                </Input>
                
                <Input 
                    name="password" 
                    type="password" 
                    handleInputChange={handlePasswordInput}
                    value={password}
                    auth="login"
                >
                    Password
                </Input>
                <button>Login</button>
                
            </form>
        </div>
}
export default Login;
