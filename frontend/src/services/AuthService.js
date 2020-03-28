import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:3008/auth'
});

export const signup = async (formData) => {
    const res = await service.post('/signup', formData);
    return res.data;
}

export const login = async (formData) => {
    const res = await service.post('/login', formData);
    return res.data;
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
    const res = await service.post('/logout');
    return res.data;
}

export const whoami = async () => {
    const res = await service.get('/loggedin');
    return res.data;
}