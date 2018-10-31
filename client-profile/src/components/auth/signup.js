import React, { Component } from 'react';
import AuthService from './auth.js';
import Button from '../button'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            campus: 'Paris',
            course: 'WebDev'
        }
        this.service = new AuthService()
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {username, password, course, campus} = this.state;
        this.service.signup(username, password, course, campus)
            .then(response => {
                this.setState({
                    username:'',
                    password: '',
                    course:'',
                    campus:''
                })
                this.props.getUser(response)
            })
            .catch( error => console.log(error))
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <br></br>
                    <label>Password:</label>
                    <textarea name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                    <br></br>
                    <label>campus:</label>
                    <select value={this.state.campus} name="campus" onChange={e => this.handleChange(e)}>
                        <option value='Paris'>Paris</option>
                        <option value='Madrid'>Madrid</option>
                        <option value='Barcelona'>Barcelona</option>
                        <option value='Miami'>Miami</option>
                        <option value='Berlin'>Berlin</option>
                        <option value='Amsterdam'>Amsterdam</option>
                        <option value='Mexico'>Mexico</option>
                        <option value='Sao Paulo'>Sao Paulo</option>
                    </select>
                    <br></br>

                    <label>course:</label>
                    <select value={this.state.course} name="course" onChange={e => this.handleChange(e)}>
                        <option value='WebDev'>WebDev</option>
                        <option value='UX/UI'>UX/UI</option>
                        <option value='Data Analytics'>Data Analytics</option>
                    </select>
                    <br></br>
                    <input type="submit" value="SUBMIT"></input>
                </form>

                <p>Already have account?
                <Link to={"/login"}> Login</Link>
                </p>

            </div>
        )
    }
}

export default Signup;
