import React, { useEffect } from "react";
import AuthService from "../services/auth.services";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";

export default function Login(props) {
	const [form, handleInput] = useForm();
	const authService = new AuthService();

	useEffect(() => {
		const loggedUser = localStorage.getItem("loggedUser");
		if (loggedUser) return props.history.push("/profile");
	}, [props.history]);

	const handleLogin = () => {
		authService
			.login(form)
			.then(response => {
				console.log(response);
				localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
				props.history.push("/profile");
			})
			.catch(err => {
				console.log(err);
			});
	};
	console.log(form);

	return (
		<div className="container">
			<div className="box">
				<div className="box-left">
					<div className="form">
						<h1>Log in</h1>
					</div>
					<div className="form">
						<label>Username</label>
						<input type="text" name="username" onChange={handleInput} />
						<label>Password</label>
						<input type="password" name="password" onChange={handleInput} />
						<p>
							If you don't have an account yet, you can create your account <Link to="/signup">here</Link>.
						</p>
					</div>
				</div>
				<div>
					<div className="form">
						<h1>Hello!!</h1>
						<p>Awesome to have at IronProfile again!</p>
					</div>
					<div className="form">
						<small>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</small>
						<button onClick={handleLogin}>Log in</button>
					</div>
				</div>
			</div>
		</div>
	);
}
