import axios from 'axios';

const authService = axios.create({
  baseURL: 'http://localhost:3000/auth',
  withCredentials: true
});

export const signup = async ({ username, password, campus, course }) => {
  try {
    const { data } = await authService.post('/signup', {
      username,
      password,
      campus,
      course
    });
    return data.user;
  } catch (error) {
    return error.response.data;
  }
};

export const login = async ({ username, password }) => {
  const { data } = await authService.post('/login', { username, password });
  return data;
};

export const logout = async () => {
  const response = await authService.post('/logout');
  return response;
};

export const isLoggedIn = async () => {
  const { data } = await authService.get('/loggedin');

  return data;
};

export const uploadPhoto = async photo => {
  const { data } = await authService.put('/upload', photo);

  return data.image;
};

export const editProfile = async ({ username, campus, course }) => {
  const { data } = await authService.put('/edit', { username, campus, course });

  return data.user;
};
