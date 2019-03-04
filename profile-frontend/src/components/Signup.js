import React, { Component } from 'react'
import axios from 'axios'

class Signup extends Component{
    state={
        newUser:{},
        errors: {}
    }
    eventHandler=(e)=>{
        let {newUser, errors} = this.state
        newUser[e.target.name] = e.target.value
        errors = {}
        if (newUser.password !== newUser.password2) errors.password = "no coinciden"
        // console.log(newUser)
        this.setState({ newUser, errors })
    }
    sendToServer=()=>{
        let {newUser} = this.state
        let url = "http://localhost:3000/signup"
        axios.post(url,newUser)
        .then(user=>{
            console.log(user)
            this.props.history.push('/login')
        })
        .catch(e=>console.log(e))
        
    }
    render(){
        const {newUser,errors}= this.state
        if(!newUser)return<div>Loading...</div>
        return(
            <div className="login-container">
            <div className="main-card">
            <div className="login-card">
            <h1>Sign up</h1>
            <input onChange={this.eventHandler} name="username" type="text" placeholder="username" />
                <input onChange={this.eventHandler} name="password" type="password" placeholder="password" />
                <input onChange={this.eventHandler} name="password2" type="password" placeholder="re-type password" />
                
                <select name="campus" placeholder="campus" onChange={this.eventHandler}>
                    <option selected value="Madrid">Madrid</option>
                    <option value="Barcelona">Barcelona</option>
                    <option value="Miami">Miami</option>
                    <option value="Paris">Paris</option>
                    <option value="Berlin">Berlin</option>
                    <option value="Amsterdam">Amsterdam</option>
                    <option value="México">México</option>
                    <option value="Sao Paulo">Sao Paulo</option>
                </select>
                <select name="course" placeholder="course" onChange={this.eventHandler}>
                    <option selected value="WebDev">WebDev</option>
                    <option value="UX/UI">UX/UI</option>
                    <option value="Data Analytics">Data Analytics</option>
                </select>
                <p style={{ color: "red" }}>{errors.password}</p>
                </div>
            <div className="hello-card">
                <h2>Hello</h2>
                <p>awesome to have you back!</p>
                <button onClick={this.sendToServer}>Registrarse</button>
            </div>
            </div>

            </div>
        )
    }
}

export default Signup