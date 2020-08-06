import React, { Component } from 'react'
import AuthService from '../auth/authService'

export class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            campus: '',
            course: ''
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
        const {username, password, campus, course} = this.state
        this.service.signup(username, password, campus, course)
        .then(response => {
            this.setState({
                username: '',
                password: '',
                campus: '',
                course: ''
            })
            this.props.getUser(response._id)
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <h2>Sign up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name='username' value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" name='password' value={this.state.password} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Campus</label>
                        <select name="campus" defaultValue='' onChange={this.handleChange}>
                            <option value="" disabled></option>
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona" defaultValue>Barcelona</option>
                            <option value="Miami">Miami</option>
                            <option value="Paris">Paris</option>
                            <option value="Berlin">Berlin</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="México">México</option>
                            <option value="Sao Paulo">Sao Paulo</option>
                            <option value="Lisbon">Lisbon</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Course</label>
                        <select name="course" defaultValue='' onChange={this.handleChange}>
                            <option value="" disabled></option>
                            <option value="Web Dev" defaultValue>Web Dev</option>
                            <option value="UX/UI">UX/UI</option>
                            <option value="Data Analytics">Data Analytics</option>
                        </select>
                    </div>
                    <input className='btn' type="submit" value='Create the Account'/>
                </form>
            </div>
        )
    }
}

export default Signup
