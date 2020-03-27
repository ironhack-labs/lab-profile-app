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
    console.log('respuesta del server al signup', data);
    return data.user;
  } catch (error) {
    console.log('errorcito', error.response);
    return error.response.data;
  }
};

export const login = async ({ username, password }) => {
  const { data } = await authService.post('/login', { username, password });
  console.log('respuesta del server al login', data);
  return data.user;
};

export const logout = async () => {
  console.log('loggin out!');
  const response = await authService.post('/logout');
  console.log('respuesta del server al logout', response);
};

export const isLoggedIn = async () => {
  const { data } = await authService.get('/loggedin');
  console.log('respuesta del server al loggedin', data);

  return data;
};

export const uploadPhoto = async photo => {
  const { data } = await authService.put('/upload', photo);
  console.log('respuesta del server al upload', data);

  return data.image;
};

export const editProfile = async ({ username, campus, course }) => {
  const { data } = await authService.put('/edit', { username, campus, course });
  console.log('respuesta del server al edit', data);

  return data.user;
};
