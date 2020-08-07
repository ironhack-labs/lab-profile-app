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
            this.props.getUser(response)
            this.props.history.push('/profile')
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div className='box d-flex flex-row'>
                <div className='box-element'>
                    <h2>Sign up</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input className='form-control' type="text" name='username' value={this.state.username} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input className='form-control' type="text" name='password' value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Campus</label>
                            <select className='form-control' name="campus" defaultValue='' onChange={this.handleChange}>
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
                            <select className='form-control' name="course" defaultValue='' onChange={this.handleChange}>
                                <option value="" disabled></option>
                                <option value="Web Dev" defaultValue>Web Dev</option>
                                <option value="UX/UI">UX/UI</option>
                                <option value="Data Analytics">Data Analytics</option>
                            </select>
                        </div>
                        <input className='btn' type="submit" value='Create the Account'/>
                    </form>
                </div>
                <div className='box-element d-flex flex-column justify-content-around'>
                    <div>
                        <h2>Hello!!!</h2>
                        <h3>Welcome to IronProfile!</h3>
                    </div>
                    <div className='d-flex flex-column align-items-center'>
                        <p>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup
