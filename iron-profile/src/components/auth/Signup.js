import React, {Component} from 'react';
import AuthService from '../../auth/auth-service';
import {Link} from 'react-router-dom'

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
        this
            .service
            .signup(username, password, campus, course)
            .then(response => {
                this.setState({username: '', password: '', campus: '', course: ''});
                this
                    .props
                    .callback(response);
                this
                    .props
                    .history
                    .push('/profile');
            })
            .catch(error => console.log(error))
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className='container'>
                <div className='auth-form'>
                    <h1 className='title'>Sign Up</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <div>
                            <label htmlFor='username'>Username:</label>
                            <input
                                type='text'
                                name='username'
                                value={this.state.username}
                                onChange={e => this.handleChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor='password'>Password:</label>
                            <input
                                name='password'
                                value={this.state.password}
                                onChange={e => this.handleChange(e)}/>
                        </div>
                        <div>
                            <label htmlFor='campus'>Campus:</label>
                            <select
                                name='campus'
                                onChange={e => this.handleChange(e)}
                                value={this.state.campus}>
                                <option value=''></option>
                                <option value='Madrid'>Madrid</option>
                                <option value='Barcelona'>Barcelona</option>
                                <option value='Miami'>Miami</option>
                                <option value='Paris'>Paris</option>
                                <option value='Berlin'>Berlin</option>
                                <option value='Amsterdam'>Amsterdam</option>
                                <option value='México'>México</option>
                                <option value='Sao Paulo'>Sao Paulo</option>
                                <option value='Lisbon'>Lisbon</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='course'>Course:</label>
                            <select
                                name='course'
                                onChange={e => this.handleChange(e)}
                                value={this.state.course}>
                                <option value=''></option>
                                <option value='Web Dev'>Web Dev</option>
                                <option value='UX/ UI'>UX/ UI</option>
                                <option value='Data Analytics'>Data Analytics</option>
                            </select>
                        </div>
                    </form>
                    <p>Already have account? <Link to={'/login'}>Login</Link></p>
                </div>
                <div className='info'>
                    <h3>Hello!!</h3>
                    <h2>Welcome to IronProfile!</h2>
                    <p>
                        If you signUp, you agree with all our terms and conditions where we can do
                        whatever we want with the data!
                    </p>
                    <form onSubmit={this.handleFormSubmit}>
                        <input className='auth-button' type='submit' value='Create the Account'/>
                    </form>
                </div>
            </div>
        )
    }
}
export default Signup;