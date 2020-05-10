import React, { useState, useContext }  from 'react';

import Input from '../../components/Input/Input';
import './Login.scss'
import { AuthContext } from '../../components/Auth/AuthProvider';

import AuthService from '../../components/AuthService';
const service = new AuthService();


const Login = ({history}) => {
    
        let [ username, setUsername ] = useState('');  
        let [ password, setPassword ] = useState('');
        let { setCurrent } = useContext(AuthContext);
        
        const handleNameInput = e => setUsername(e.target.value);    
        const handlePasswordInput = e => setPassword(e.target.value);
    
        const handleSubmit = (e) => {
            e.preventDefault()
            service.login({
                username,
                password
            })
            .then( user => {
                setCurrent(user);
                history.push('/profile');
            })
            .catch( error => console.log('Error => ', error))
        }

       return <div className="container--form">
            <h1 className="title">Login</h1>
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
