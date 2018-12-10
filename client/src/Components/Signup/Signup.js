import React, { Component } from 'react';
import { Link } from "react-router-dom";
import authService from '../authService';

class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            campus: "",
            course: "",
            redirect: false
        }
        this.service = new authService();
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const { username, password, campus, course } = this.state;

        this.service.signup({ username, password, campus, course })
            .then(response => {
                this.setState({
                    username: "",
                    password: "",
                    campus: "",
                    course: "",
                    redirect: true
                });
                this.props.getUser(response)
                console.log("the response is " + response);

            })
            .catch(error => console.log("error " + error))
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div>
                <Link to="/">Home</Link> <br />
                <h1>Signup</h1>
                <form onSubmit={this.handleFormSubmit} style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                    <label>Username </label>
                    <input type="text" name="username" value={this.state.username} onChange={e => this.handleChange(e)} /> <br />

                    <label>Password </label>
                    <input type="password" name="password" value={this.state.password} onChange={e => this.handleChange(e)} /><br />

                    <label>Campus</label>
                    <select name="campus" id="campus" onChange={e => this.handleChange(e)}>
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Miami">Miami</option>
                        <option value="Paris">Paris</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Amsterdam">Amsterdam</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Sao Paulo">Sao Paulo</option>
                    </select><br />

                    <label>Course</label>
                    <select name="course" id="course" onChange={e => this.handleChange(e)}>
                        <option value="WebDev">WebDev</option>
                        <option value="UX/UI">UX/UI</option>
                        <option value="Data Analytics">Data Analytics</option>
                    </select><br />
                    {/* <Link to="/profile"><input type="submit" value="Submit" /></Link> */}
                    <input type="submit" value="Submit" style={{ borderRadius: "5px" }} />
                </form>
                <p>Already have account?
          <Link to="/login">Login</Link>
                </p>
            </div>
        );
    }
}

export default Signup;