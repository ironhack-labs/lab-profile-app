import axios from 'axios';

class AuthService {
  constructor(url) {
    this.url = url;
  }

  signup = body => {
    const { url } = this;
    const path = '/auth/signup';
    return axios.post(`${url}${path}`, body);
  };

  login = body => {
    const { url } = this;
    const path = '/auth/login';
    return axios.post(`${url}${path}`, body);
  };

  upload = body => {
    const { url } = this;
    const path = '/auth/upload';
    return axios.post(`${url}${path}`, body);
  };

  edit = body => {
    const { url } = this;
    const path = '/auth/edit';
    return axios.post(`${url}${path}`, body);
  };

  logout = () => {
    const { url } = this;
    const path = '/auth/logout';
    return axios.get(`${url}${path}`);
  };

  loggedin = () => {
    const { url } = this;
    const path = '/auth/loggedin';
    return axios.get(`${url}${path}`);
  };
}

const auth = new AuthService('http://localhost:5000');

export default auth;
