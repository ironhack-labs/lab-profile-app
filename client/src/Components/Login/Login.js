import React, { Component } from 'react';
import { Link } from "react-router-dom";
import authService from '../authService';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
        this.service = new authService();
    }
    handleFormSubmit = (event) => {
        event.preventDefault();

        const { username, password } = this.state
        this.service.login({ username, password })
            .then(response => {
                this.setState({ username: "", password: "" });
                this.props.getUser(response)
            })
            .catch(error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div>
                <Link to="/">Home</Link> <br />
                <h1>Login</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username </label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />

                    <label>Password </label>
                    <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                </form>
                {/* <Link to="/profile"><input type="submit" value="Login" /></Link> */}
                <input type="submit" value="Login" />
                <p>You don't have an account?
          <Link to="/signup">Signup</Link>
                </p>
            </div >
        );
    }
}

export default Login;