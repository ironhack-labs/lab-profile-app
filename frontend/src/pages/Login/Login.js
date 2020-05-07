import React from 'react';

import Input from '../../components/Input/Input';

import './Login.scss';

const Login = ({handleInputChange, handleSubmit, username, password}) => 

        <div className="container--form">
            <form className="form form--login" onSubmit={(e) => handleSubmit(e, 'login')}>
                <Input 
                    name="username" 
                    type="text" 
                    handleInputChange={handleInputChange}
                    value={username}
                >Username</Input>
                <Input 
                    name="password" 
                    type="password" 
                    handleInputChange={handleInputChange}
                    value={password}
                >Password</Input>
                <button>Login</button>
                
            </form>
        </div>

export default Login;
