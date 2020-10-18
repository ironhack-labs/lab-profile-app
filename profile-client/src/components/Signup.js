import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AuthService from '../services/Auth'

export default class Signup extends Component {
    state = {
        username: '',
        password: '',
        campus: '',
        course: ''
    }

    service = new AuthService()

    handleFormSubmit = (event) => {
        event.preventDefault();
        const {username, password, campus, course} = this.state;

        this.service.signup(username, password, campus, course)
            .then(response => {
                this.setState({
                    username: "",
                    password: "",
                    campus: "",
                    course: ""
                });
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
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username:<br/>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    </label><br/>

                    <label>Password:<br/>
                    <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
                    </label><br/>

                    <label>Campus:<br/>
                    <input name="campus" value={this.state.campus} onChange={e => this.handleChange(e)} />
                    </label><br/>

                    <label>Course:<br/>
                    <input name="course" value={this.state.course} onChange={e => this.handleChange(e)} />
                    </label><br/>

                    <input type="submit" value="Signup" />
                </form>

                <p>Already have account?
            <Link to={"/login"}> Login</Link>
                </p>

                {this.props.getUser && <Redirect to='/profile'/>}

            </div>
        )
    }
}
