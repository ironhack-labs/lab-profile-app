import React from "react";
import AuthService from "../services/auth.services";
import useForm from "../hooks/useForm";

export default function Signup(props) {   
    const rawUser = localStorage.getItem("loggedUser");
    const loggedUser = JSON.parse(rawUser)

    const [form, handleInput] = useForm();

    const handleEdit = () => {
		authService
			.edit(form)
			.then(response => {
                console.log(response);
                localStorage.setItem("loggedUser", JSON.stringify(response.data.user));
				props.history.push("/profile");
			})
			.catch(err => {
				console.log(err);
			});
	};
    
    const authService = new AuthService();	

	return (
		<div className="container">
			<div className="box">
				<div className="box-left">
					<div className="form">
						<h1>Edit account</h1>
					</div>
					<div className="form">
						<label>Username</label>
						<input type="text" name="username" onChange={handleInput} defaultValue={loggedUser.username} />
						<label>Campus</label>
						<select name="campus" onChange={handleInput} defaultValue={loggedUser.campus}>
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
						<select name="course" onChange={handleInput} defaultValue={loggedUser.course}>
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
						<button onClick={handleEdit}>Update Account</button>
					</div>
				</div>
			</div>
		</div>
	);
}
