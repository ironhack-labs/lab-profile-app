import React, { Component } from 'react';
import axios from "axios";

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '', campus: '', course: '', image: '' }
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = (event) => {
        const username=this.state.username
        const password=this.state.password
        const campus=this.state.campus
        const course=this.state.course
        const image=this.state.image
 
        event.preventDefault();

        axios.post("http://localhost:5000/api/signup", { username, password, campus, course, image})
            .then((response) => {
                this.setState({ username: '', password: '', campus: '', course: '', image: '' })
                console.log(response)
                // after submitting the form, redirect to '/projects'
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label>User Name:</label>
                    <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} />
                    <br/>
                    <label>Password:</label>
                    <input type="text" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                    <br/>
                    <label>Campus:</label>
                    <input type="text" name="campus" value={this.state.campus} onChange={(e) => this.handleChange(e)} />
                    <br/>
                    <label>Course:</label>
                    <input type="text" name="course" value={this.state.course} onChange={(e) => this.handleChange(e)} />
                    <br/>
                    <label>Image:</label>
                    <input type="text" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)} />
                    <br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Signup;