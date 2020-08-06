import React, { Component } from 'react'
import AuthService from '../auth/authService'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.service = new AuthService()
    }
    handleChange = ({target}) => {
        const {name, value} = target
        this.setState(state => ({
            ...state,
            [name]: value
        }))
    }
    handleSubmit = e => {
        e.preventDefault()
        const {username, password} = this.state
        this.service.login(username, password)
        .then(response => {
            this.setState({
                username: '',
                password: ''
            })
            this.props.getUser(response._id)
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <h2>Log in</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name='username' value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" name='password' value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <input className='btn' type="submit" value='Log In'/>
                </form>
            </div>
        )
    }
}

export default Login
