import React from 'react';

import Input from '../../components/Input/Input';

import './Signup.scss';

const Signup = ({
                handleInputChange,
                handleSubmit, 
                username, 
                password, 
                campus, 
                course,
                history
            }) => 
    
        <div className="container__signup">
            <form onSubmit={(e) => handleSubmit(e, 'signup', history)}>
                <Input 
                    type="text" 
                    name="username" 
                    handleInputChange={handleInputChange} 
                    auth="signup"
                    value={username}
                >Username</Input>         
                <Input 
                    type="password" 
                    name="password" 
                    handleInputChange={handleInputChange} 
                    auth="signup"
                    value={password}
                >Password</Input>         
                <Input 
                    type="text" 
                    name="campus" 
                    handleInputChange={handleInputChange} 
                    auth="signup"
                    value={campus}
                >Campus</Input>         
                <Input 
                    type="text" 
                    name="course" 
                    handleInputChange={handleInputChange} 
                    auth="signup"
                    value={course}
                >Course</Input> 
                <button>SIGNUP</button>        
             </form>
        </div>


export default Signup;
