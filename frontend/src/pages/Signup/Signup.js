import React, { useState, useContext } from 'react';
import { AuthContext } from '../../components/Auth/AuthProvider';
import Input from '../../components/Input/Input';

import './Signup.scss';

import AuthService from '../../components/AuthService';
const service  = new AuthService();

const Signup = ({ history }) => {
    let [ username, setUsername ] = useState('');
    let [ password, setPassword ] = useState('');
    let [ campus, setCampus ] = useState('');
    let [ course, setCourse ] = useState('');
    let { setCurrent } = useContext(AuthContext);
    
    const handleNameInput = e => setUsername(e.target.value);
    const handlePasswordInput = e => setPassword(e.target.value);
    const handleCampusInput = e => setCampus(e.target.value);
    const handleCourseInput = e => setCourse(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault()
        service.signup({
            username,
            password,
            campus,
            course
        })
        .then( user => {
            setUsername('')
            setPassword('')
            setCampus('')
            setCourse('')
            setCurrent(user)
            history.push('/profile');
        })
        .catch( error => console.log(error))
    }
    
    return (
        <div className="container__signup">
            <form className="form--signup" onSubmit={handleSubmit}>
                <div className="form-content">
                    <h1 className="title">Signup</h1>
                    <Input 
                        type="text" 
                        name="username" 
                        handleInputChange={handleNameInput} 
                        auth="signup"
                        value={username}
                    >Username</Input>         
                    <Input 
                        type="password" 
                        name="password" 
                        handleInputChange={handlePasswordInput}
                        auth="signup"
                        value={password}
                    >Password</Input>         
                    <Input 
                        type="text" 
                        name="campus" 
                        handleInputChange={handleCampusInput} 
                        auth="signup"
                        value={campus}
                    >Campus</Input>         
                    <Input 
                        type="text" 
                        name="course" 
                        handleInputChange={handleCourseInput} 
                        auth="signup"
                        value={course}
                    >Course</Input> 
                </div>
                <aside className="aside">
                    <div className="aside__title">
                        <h1>Hello!!!</h1>
                        <p>Welcome to the IronProfile!</p>
                    </div>
                    <p>if you signup you agree with all our terms and conditions where we can do whatever we want with the data</p>
                    <button className="button button--signup">Create the Account</button>        
                </aside>
             </form>
        </div>
    ) 
    
}
    


export default Signup;
