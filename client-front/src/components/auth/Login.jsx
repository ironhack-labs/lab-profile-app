import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import AuthService from './AuthService';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
		this.service = new AuthService();
	}

	handlerSubmit = (event) => {
		event.preventDefault();
		const username = this.state.username;
		const password = this.state.password;

		this.service
			.login(username, password)
			.then((response) => {
				this.setState({
					username: username,
					password: password,
					error: false
				});

				this.props.getUser(response);
			})
			.catch((error) => {
				this.setState({
					username: username,
					password: password,
					error: true
				});
			});
	};

	handlerChange = (event) => {
		const { name, value } = event.target;
		this.setState({ ...this.state, [name]: value });
	};

	render() {
		return (
			<div>
				<h2>Login</h2>
				<form className="signup" onSubmit={this.handlerSubmit}>
					<label>Username</label>
					<input id="username" type="text" name="username" onChange={(e) => this.handlerChange(e)} />

					<label>Password</label>
					<input type="text" id="password" name="password" onChange={(e) => this.handlerChange(e)} />

					<input type="submit" value="Log in" />
					{/* {this.state.redirect ? <Redirect to="/beers" /> : ''} */}
				</form>
				<h1>{this.state.error ? 'Error' : ''}</h1>
				<p>
					Don't have account?
					<Link to={'/signup'}> Signup</Link>
				</p>
			</div>
		);
	}
}

export default Login;
