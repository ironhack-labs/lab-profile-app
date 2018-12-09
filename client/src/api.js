import axios from 'axios';

const service = axios.create({
	baseURL: 'http://localhost:5000/auth',
	withCredentials: true
});

const errHandler = err => {
	if (err.response && err.response.data) {
		throw err.response.data.message;
	}
	throw err;
};

export default {

	addPicture(file,user) {
		const formData = new FormData();
		formData.append('picture', file);
		formData.append('id', user);
		return service
			.post('/edit', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then(res => res.data)
			.catch(errHandler);
	}
};