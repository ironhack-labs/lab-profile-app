import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3008/auth',
    withCredentials: true
});

export const signup = async (formData) => {
    return service.post('/signup', formData);
}

export const login = async (formData) => {
    return service.post('/login', formData);
}

export const upload = async (formData) => {
    const res = await service.post('/upload', formData);
    return res.data;
}

export const edit = async (formData) => {
    const res = await service.post('/edit', formData);
    return res.data;
}

export const logout = async () => {
    return service.post('/logout');
}

export const whoami = async () => {
    const res = await service.get('/loggedin');
    return res.data;
}