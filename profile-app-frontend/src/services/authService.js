// upload that makes a POST request to the auth/upload route passing the file,
// edit that makes a POST request to the auth/edit route passing username, campus and course,

import Axios from 'axios';

const AuthService = () => {
  let service = Axios.create({
    baseURL: 'http://localhost:5000/auth',
    withCredentials: true,
  });

  signup = (username, password, campus, course) => {
    return service
      .post('/signup', { username, password, campus, course })
      .then((res) => res.data);
  };

  login = (username, password) => {
    return service
      .post('/login', { username, password })
      .then((res) => res.data);
  };

  loggedin = () => service.get('/loggedin').then((res) => res.data);

  logout = () => service.post('/logout', {}).then((res) => res.data);

  upload = (imageUrl) => {
    return service.post('/upload', { imageUrl }).then((res) => res.data);
  };

  edit = (username, campus, course) => {
    return service
      .post('/edit/:id', { username, campus, course })
      .then((res) => res.data);
  };
};

export default AuthService;
