import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import AuthService from './AuthService';
// import { Redirect } from 'react-router-dom';

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '', campus: 'Madrid', course: 'WebDev' };
		this.service = new AuthService();
	}

	// redirect = () => {};

	handlerSubmit = (event) => {
		event.preventDefault();
		const username = this.state.username;
		const password = this.state.password;
		const campus = this.state.campus;
		const course = this.state.course;

		//aquí llamamos al endpoint /signup de nuestra API Rest usando nuestro AuthService
		this.service
			.signup(username, password, campus, course)
			.then((response) => {
				this.setState(
					{
						username: '',
						password: '',
						campus: '',
						course: ''
					}
					// () => {
					// 	this.redirect();
					// }
				);

				//aquí elevamos el nuevo usuario una vez creado a App usando getUser via props
				//por tanto, informamos a App de que el nuevo usuario ha sido creado, provocando un re-render
				//y mostrando la parte de contenidos. Mira la función getUser de App para más info (date cuenta de que establece el state de App)
				this.props.getUser(response.user);
			})
			.catch((error) => {
				this.setState({
					username: username,
					password: password,
					campus: campus,
					course: course,
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
			<div className="container-signup">
				<div className="allform">
					<h2>Sign Up</h2>
					<form className="signup" onSubmit={this.handlerSubmit}>
						<label>Username</label>
						<input id="username" type="text" name="username" onChange={(e) => this.handlerChange(e)} />

						<label>Password</label>
						<input type="text" id="password" name="password" onChange={(e) => this.handlerChange(e)} />

						<label>Campus</label>
						<select name="campus" onChange={(e) => this.handlerChange(e)}>
							<option value="Madrid">Madrid</option>
							<option value="Barcelona">Barcelona</option>
							<option value="Miami">Miami</option>
							<option value="Paris">Paris</option>
							<option value="Berlin">Berlin</option>
							<option value="Amsterdam">Amsterdam</option>
							<option value="Mexico">Mexico</option>
							<option value="Sao Paulo">Sao Paulo</option>
						</select>

						<label>Course</label>
						<select name="course" onChange={(e) => this.handlerChange(e)}>
							<option value="WebDev">WebDev</option>
							<option value="UX/UI">UX/UI</option>
							<option value="Data Analytics">Data Analytics</option>
						</select>

						<input type="submit" value="Create the Account" />
						{/* {this.state.redirect ? <Redirect to="/login" /> : ''} */}
					</form>
				</div>
				<p>
					Already have account?
					<Link to={'/login'}> Login</Link>
				</p>
			</div>
		);
	}
}

export default Signup;
