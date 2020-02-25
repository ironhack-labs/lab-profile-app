import React, { Component } from 'react'
import './index.css'
import authService from "../../services/authService.js"
import { Link } from 'react-router-dom'
export default class Login extends Component {
    state={
        username:"",
        password:""
    }

    handleChange=({target:{name,value}})=>{
        this.setState({[name]:value})
    }

    handleSubmit = async () => {
        const res = await authService.login(this.state).catch(err => alert("Username or Password incorrect."))
        if( res && res.data ) return this.props.history.push("/profile")
    }


    render() {
        return (
            <div className="Login">
            <div>
            <article className="LoginForm">
            <h1>Login</h1>
            <br/><br/>
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            <br/><br/><br/>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>  
            <br/><br/><br/><br/><br/><br/>
            <p>If you don't have an account yet, you</p>
            <p>can create your account <Link to='/signup'>here</Link></p>
            </article>
            <article className="LoginSubmit">
            <h1>Hello!!</h1>
            <h2>Awesome to have at</h2>
            <h2>IronProfile again!</h2>
            <br/><br/><br/><br/><br/><br/><br/>  
            <p>If you signup, you agree with all our</p>
            <p>terms and conditions where we can</p>
            <p>do whatever we want with the data!</p>
            <h5 onClick={this.handleSubmit}>Log in</h5>     
            </article>
          
            </div>
            </div>
        )
    }
}
