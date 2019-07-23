import axios from "axios";
const baseURL = "http://localhost:3001/auth";

class AuthService {
	constructor() {
		this.service = axios.create({
			baseURL,
			withCredentials: true
		});
	}

	signup(data) {
		return this.service.post("/signup", data);
	}

	login(data) {
		return this.service.post("/login", data);
	}

	logout() {
		return this.service.get("/logout");
    }
    
	edit(data) {
		return this.service.post("/edit", data);
    }
    
	loggedin() {
		return this.service.get("/loggedin");
	}

	upload(data) {
		return this.service.post("/upload", data);
	}
}

export default AuthService
