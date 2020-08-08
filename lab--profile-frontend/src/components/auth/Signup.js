import React, { Component } from 'react';
import AuthService from '../../authService/auth-service';
import { Link } from 'react-router-dom'


class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            campus: '',
            course: ''
        };
        this.service = new AuthService();
    }
    // handleChange() and handleSubmit() will be added here
    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const campus = this.state.campus;
        const course = this.state.course;
        this.service.signup(username, password, campus, course)
            .then(response => {
                this.setState({
                    username: "",
                    password: "",
                    campus: '',
                    course: ''
                });
                this.props.getUser(response._id)
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
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} />
                    <label>Password:</label>
                    <input name="password" value={this.state.password} onChange={e => this.handleChange(e)} />
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
                    <label>Course</label>
                    <select name="course" defaultValue='' onChange={this.handleChange}>
                        <option value="" disabled></option>
                        <option value="Web Dev" defaultValue>Web Dev</option>
                        <option value="UX/UI">UX/UI</option>
                        <option value="Data Analytics">Data Analytics</option>
                    </select>
                    <input type="submit" value="Create account" />
                </form>
                <p>Already have account?
                <Link to={"/"}> Login</Link>
                </p>
            </div>
        )
    }
}
export default Signup;
