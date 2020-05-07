import React, { Component } from 'react'
import AuthService from '../components/authService';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", campus: "", course: ""};
        this.service = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleFormSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const campus = this.state.campus;
        const course = this.state.course;
    
        this.service
          .signup(username, password, campus, course)
          .then((response) => {
            this.setState({
              username: "",
              password: "",
              campus: "", 
              course: ""

            });
            this.props.getUser(response)
            this.props.history.push("/login");
          })
          .catch((error) => console.log(error));
      }
    
      handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <input type='text' name='username' placeholder='username' onChange={this.handleChange}></input>
                    <input type='password' name='password' placeholder='password' onChange={this.handleChange}></input>
                    <input type='text' name='campus' placeholder='campus' onChange={this.handleChange}></input>
                    <input type='text' name='course' placeholder='course info' onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}