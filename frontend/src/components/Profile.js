import React, {useState} from "react";
import AuthService from "../services/auth.services";
import { Link } from "react-router-dom";

export default function Profile(props) {
	const rawUser = localStorage.getItem("loggedUser");
	const [loggedUser, setLoggedUser] = useState(JSON.parse(rawUser)) 

	const authService = new AuthService();

	const handleLogout = () => {
		authService
			.logout()
			.then(() => {
				localStorage.removeItem("loggedUser");
				props.history.push("/login");
			})
			.catch(err => console.log(err));
	};

	const selectPhoto = async e => {
		try {
			const photo = new FormData();
			photo.append("photo", e.target.files[0]);
			const response = await authService.upload(photo);
			setLoggedUser(
				{...loggedUser,
				image: response.data.user.image}
			)
			localStorage.setItem("loggedUser", JSON.stringify(response.data.user));

		} catch (error) {
			console.log(error);
		}
	};

	console.log('loggedUser', loggedUser)

	return (
		<div className="container">
			<div className="box">
				<div className="box-left">
					<div className="form">
						<h1>Profile</h1>
					</div>
					<div className="form">
						<span>Username</span>
						<h4>{loggedUser.username}</h4>
						<span>Campus</span>
						<h4>{loggedUser.campus}</h4>
						<span>Course</span>
						<h4>{loggedUser.course}</h4>
						<Link to="/edit">
							<button>Edit Account</button>
						</Link>
						<button className="btn-a" onClick={handleLogout}>
							<b>Logout</b>
						</button>
					</div>
				</div>
				<div>
					<div className="form">
						<img src={loggedUser.image} alt={loggedUser.username} />
						<input type="file" name="photo" onChange={selectPhoto} />
					</div>
					<div className="form">
						<small>The user is able to upload a new profile photo, using NodeJS and Multer uploader.</small>
					</div>
				</div>
			</div>
		</div>
	);
}
