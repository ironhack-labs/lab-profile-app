import React, { Component } from 'react';
import AuthService from '../auth-service';
import { Link } from 'react-router-dom';
import AppButton from '../../../components/UI/AppButton/AppButton';
import './Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        };

        this.service = new AuthService();
    }

    handleFormSubmit = () => {

        const { username, password } = this.state;

        this.service.login(username, password)
            .then( response => {
                this.setState({
                    username: "",
                    password: ""
                });

                console.log(response);
                this.props.getUser(response);
                this.props.history.push('/profile');

            })
            .catch( error => {
                this.setState({
                    error: "Something went wrong!"
                });

                setTimeout(() => {
                    this.setState({
                        error: ""
                    });
                }, 2000);
            } )
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };


    render(){

        const error = this.state.error ? (
            <div className="alert">{ this.state.error }</div>
        ) : null;

        return(
            <div className="home-wrapper sign-wrap">
                <div className="form-wrap">
                    <h1 className="sign-head">Log in</h1>
                    <form className="sign-form">
                        { error }
                        <label>Username:</label>
                        <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>

                        <label>Password</label>
                        <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
                    </form>

                    <p className="sub-text" id="form-text">If you don't have an account yet, you can create your account <Link to="/signup">here</Link>.</p>
                </div>
                <div className="btn-wrap">
                    <h3 id="log-head">Hello!!</h3>
                    <p className="main-text">Awesome to have at IronProfile again!</p>
                    <p className="sub-text">If you sign, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                    <AppButton bg="white" type="submit" className="sign-btn" clicked={ this.handleFormSubmit }>Log in</AppButton>
                </div>

            </div>
        )
    }
}

export default Login;