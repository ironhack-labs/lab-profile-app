import axios from 'axios';

const baseURL = 'http://localhost:3000/auth';

const authService = axios.create({ baseURL, withCredentials: true });

export const signupFn = (data) => authService.post('/signup', data);
export const loginFn = (data) => authService.post('/login', data);
export const editFn = (data) => authService.post('/edit', data);
export const uploadFn = (data) => authService.post('/upload', data);
export const logoutFn = () => authService.post('/logout');
export const loggedinFn = () => authService.get('/loggedin');

// export default auth = {

// }
