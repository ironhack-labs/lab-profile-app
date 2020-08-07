import React, {Component} from 'react';
import AuthService from '../../auth/auth-service';
import {Link} from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.service = new AuthService();
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this
            .service
            .login(username, password)
            .then(response => {
                this.setState({username: '', password: ''});
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
                    <h1 className='title'>Log in</h1>
                    <form>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            name='username'
                            value={this.state.username}
                            onChange={e => this.handleChange(e)}/>
                        <label htmlFor='password'>Password:</label>
                        <input
                            name='password'
                            value={this.state.password}
                            onChange={e => this.handleChange(e)}/>

                    </form>
                    <p>If you don't have an account yet, you can create your account  <Link to={'/signup'}>here</Link></p>
                </div>
                <div className='info'>
                    <h3>Hello!!</h3>
                    <h2>Awesome to have you at IronProfile again!</h2>
                    <p>
                        If you Log In, you agree with all our terms and conditions where we can do
                        whatever we want with the data!
                    </p>
                    <form onSubmit={this.handleFormSubmit}>
                        <input className='auth-button' type='submit' value='Log In'/>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;