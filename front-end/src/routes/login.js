import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authServices';

export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
        this.service = new authService()
    }
    handlerChange = e => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        this.setState({ ...this.state, [inputName]: inputValue })
    }
    handlerSubmit = e => {
        e.preventDefault()
        let { username, password } = this.state
        this.service.getLogin({ username, password })
            .then(this.setState({ ...this.state, username: "", password: "" }))
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={e => this.handlerSubmit(e)}>
                    <label forHtml="username">Username</label>
                    <input type="text" value={this.state.username} name="username" onChange={e => this.handlerChange(e)} placeholder="Username"></input>
                    <br></br>
                    <label forHtml="password">Password</label>
                    <input id="password" value={this.state.password} name="password" onChange={e => this.handlerChange(e)} type="password" name="password" placeholder="Your password" />
                    <button>Login</button>
                    <p class="account-message">
                        Don't you already have an account?
                    <Link to="/signup">Signup</Link>
                    </p>
                </form>
            </div>
        )
    }
}