import React, { Component } from 'react';
import AuthService from './auth.js';
import Button from '../button'
import { Link } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            status :''
        }
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        const { username, password } = this.state;
        this.service.login(username, password)
            .then(response => { // data coming from auth
                this.setState({
                    username: '',
                    password: ''
                }) 
                this.props.getUser(response)
            })
            .catch( error => console.log(error))

    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>username</label>
                    <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)}></input>
                    <br></br>
                    <label>password</label>
                    <input type="password" name="password" value={this.state.password} onChange={e => { this.handleChange(e) }}></input>
                    <input type="submit" value="SUBMIT"></input>
                </form>
            </div>
        )
    }
}

export default Login;