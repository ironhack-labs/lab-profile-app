import './index.css'
import authService from "../../services/authService.js"

import React, { Component } from 'react'

export default class Signup extends Component {
    state={
        username:"",
        password:"",
        campus:"",
        course:""
    }

handleChange=({target:{name,value}})=>{
    this.setState({[name]:value})
}

handleSubmit= async()=>{
const r=await authService.signup(this.state).catch(err=>console.log(err))
if( r && r.data ) return this.props.history.push("/login")
}

    render() {
        return (
            
            <div className="Signup">
            <div>
            <article className="SignupForm">
            <h1>Signup</h1>
            <br/><br/>
            <label>Username</label>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
            <br/><br/><br/>
            <label>Password</label>
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>  
            <br/><br/><br/>
            <label>Campus</label>
            <select id="campus" name="campus" value={this.state.campus} onChange={this.handleChange}>
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
            <br/><br/><br/>
            <label>Course</label>
            <select id="course" name="course" value={this.state.course} onChange={this.handleChange}>
            <option value="WebDev">WebDev</option>
            <option value="UX/UI">UX/UI</option>
            <option value="Data Analytics">Data </option>
            </select>
            </article>
            <article className="SignupSubmit">
            <h1>Hello!</h1>
            <h2>Welcome to IronProfile!</h2>
            <br/><br/><br/><br/><br/><br/><br/>  
            <p>If you signup, you agree with all our</p>
            <p>terms and conditions where we can</p>
            <p>do whatever we want with the data!</p>
            <h5 onClick={this.handleSubmit}>Create the Account</h5>     
            </article>
          
            </div>
            </div>
        )
    }
}