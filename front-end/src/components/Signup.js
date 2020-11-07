import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class Signup extends Component {

    state = {
        username: '',
        password: '',
        campus: [],
        course: []
    }

    handleChange = (e) => {
        const { name, value} = e.target

        this.setState({
            [name]: value
        })
    }


    render() {
        console.log(this.state.password)
        return (
            <div>
                <h1>Signup</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />

                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

                    <label>Campus</label>
                    <select name='campus' value={this.state.campus} onChange={this.handleChange}>
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

                    <label>Course</label>
                    <select name='course' value={this.state.course} onChange={this.handleChange}>
                        <option value='Web Dev'>Web Dev</option>
                        <option value='UX/UI'>UX/UI</option>
                        <option value='Data Analytics'>Data Analytics</option>
                    </select>
                    
                    <button>Signup</button>
                    <p>Already have an account? 
                        <Link to="/login">Login</Link>
                    </p>
                </form>
                
            </div>
        )
    }
}
