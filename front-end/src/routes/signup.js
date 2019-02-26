import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authServices';

export default class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            campus: "",
            course: ""
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
        let { username, password, campus, course } = this.state
        this.service.setSignup({ username, password, campus, course })
            .then(this.setState({ ...this.state, username: "", password:"", campus:"", course:""}))
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={e => this.handlerSubmit(e)}>
                    <label htmlFor="username">Username</label>
                    <input type="text" value={this.state.username} name="username" onChange={e => this.handlerChange(e)} placeholder="Username"></input>
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <input id="password" value={this.state.password} onChange={e => this.handlerChange(e)} type="password" name="password" placeholder="Your password" />
                    <label htmlFor="campus">Campus</label>
                    <input id="campus" value={this.state.campus} onChange={e => this.handlerChange(e)} type="text" name="campus" placeholder="Your campus" />
                    <label htmlFor="course">Course</label>
                    <input id="course" value={this.state.course} onChange={e => this.handlerChange(e)} type="text" name="course" placeholder="Your course" />
                    <button>Create account</button>
                    <p className="account-message">
                        Do you already have an account?
                    <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        )
    }
}