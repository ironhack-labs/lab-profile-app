import React from "react";
import AuthService from "../services/auth.services";
import useForm from "../hooks/useForm";

export default function Signup(props) {
	const [form, handleInput] = useForm();
	const authService = new AuthService();

	const handleSignup = () => {
		authService
			.signup(form)
			.then(response => {
				console.log(response);
				props.history.push("/login");
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
						<h1>Sign up</h1>
					</div>
					<div className="form">
						<label>Username</label>
						<input type="text" name="username" onChange={handleInput} />
						<label>Password</label>
						<input type="password" name="password" onChange={handleInput} />
						<label>Campus</label>
						<select name="campus" onChange={handleInput}>
							<option value="Madrid">Madrid</option>
							<option value="Barcelona">Barcelona</option>
							<option value="Miami">Miami</option>
							<option value="Paris">París</option>
							<option value="Berlin">Berlín</option>
							<option value="Amsterdam">Amsterdam</option>
							<option value="Mexico">México</option>
							<option value="Sao Paulo">Sao Paulo</option>
						</select>
						<label>Course</label>
						<select name="course" onChange={handleInput}>
							<option value="WebDev">WebDev</option>
							<option value="UX/UI">UX/UI</option>
							<option value="Data Analytics">Data Analytics</option>
						</select>
					</div>
				</div>
				<div>
					<div className="form">
						<h1>Hello!!</h1>
						<p>Welcome to IronProfile!</p>
					</div>
					<div className="form">
						<small>If you signup, you agree with all our terms and conditions where we can do whatever we want with the data!</small>
						<button onClick={handleSignup}>Create the Account</button>
					</div>
				</div>
			</div>
		</div>
	);
}
