import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import authService from '../../services/authService'

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
    }
handleFormSubmit = (event) => {
    event.preventDefault();
    authService.signup(this.state)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        })
    })
    .catch( error => console.log(error) )
}

render(){
    return(
        <div className="Signup">
             <form onSubmit={this.handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={this.state.userName} onChange={ e => this.handleChange(e)}/>
                <label>Password:</label>
                <input type="text" name="password" value={this.state.password} onChange={ e => this.handleChange(e)}/>   
                <input type="submit" value="Submit" />
            </form>
        </div>
    )       
}
}