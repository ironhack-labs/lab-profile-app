import { Link, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import AuthService from '../services/authService'

export default class Signup extends Component {

    state = {
        username: '',
        password: '',
        campus: '',
        course: '',
        errorMessage: '',
        redirect: false
    }

    service = new AuthService()

    handleChange = (e) => {
        const { name, value} = e.target
        this.setState({
            [name]: value,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        this.service.signup(this.state.username, this.state.password, this.state.campus, this.state.course)
        .then(user => {
            console.log(user)
            this.props.getTheUser(user)
            this.setState({
                redirect: true
            })
        })
        .catch(err => {
            this.setState({
                errorMessage: err.response.data.message
            })
        })
    }


    render() {
        if(this.state.redirect){
            return <Redirect to='/profile'></Redirect>
        }

        return (
            <div className='card'>
                <h1>Sign up</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

                    <label>Campus</label>
                    <div className='custom-select'>
                        <select name='campus' value={this.state.campus} onChange={this.handleChange}>
                            <option value='------'> ----Choose campus---- </option>
                            <option value='Madrid'>Madrid</option>
                            <option value='Barcelona'>Barcelona</option>
                            <option value='Miami'>Miami</option>
                            <option value='Paris'>Paris</option>
                            <option value='Berlin'>Berlin</option>
                            <option value='Amsterdam'>Amsterdam</option>
                            <option value='Mexico'>México</option>
                            <option value='Sao Paulo'>Sao Paulo</option>
                            <option value='Lisbon'>Lisbon</option>
                        </select>

                    </div>
                 
                    <label>Course</label>
                    <select name='course' value={this.state.course} onChange={this.handleChange}>
                        <option value='------'> ----Choose course---- </option>
                        <option value='Web Dev'>Web Dev</option>
                        <option value='UX/UI'>UX/UI</option>
                        <option value='Data Analytics'>Data Analytics</option>
                    </select>
                    
                    <button id='one-button-on-page'>Create the account</button>

                </form>
                <span>{this.state.errorMessage}</span> 
             
            </div>
        )
    }
}
