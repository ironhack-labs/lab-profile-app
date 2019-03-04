import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


let auth = {}

function Login(props){

   function eventHandler(e){
        let key = e.target.name
        auth[key] = e.target.value
        // console.log(auth)
    }

    function sendToServer(){
   
        let url = 'http://localhost:3000/login'
        //por degfault axios ignora cokkies, hay q configurarlo para q pase cookies ({withCredentials})
        axios.post(url,auth, { withCredentials:true })
        .then(res=>{
            console.log(props.history)
            props.history.push('/profile')
        })
        .catch()
    }
    return(
        <div className="login-container">

        <div className="main-card">
        <div className="login-card">
            <h1>Log in</h1>
            <input onChange={eventHandler} name="username" type="text" placeholder="username" />
            <input onChange={eventHandler} name="password" type="password" placeholder="password" /> 
            <p>Dont have an account? <Link to="/signup">Click Here</Link></p>   

        </div>
        <div className="hello-card">
        <h2>Hello</h2>
        <p>awesome to have you back!</p>
        <button onClick={sendToServer}>Log in</button>
        
        </div>
        </div>
        </div>
    )
}

export default Login