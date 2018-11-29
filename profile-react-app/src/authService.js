import axios from 'axios';

const base_url = 'http://localhost:5000/api';


export const signup = (user, history) => {
  axios.post(`${base_url}/auth/signup`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert(res.data.msg);
      console.log(res.data.user)
      history.push('/profile')
    })
    .catch(err => {
      console.log(err);
    })
}



export const login = (user, history) => {
  axios.post(`${base_url}/auth/login`, user)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      alert(res.data.msg);
      console.log(res.data.user)
      history.push('/profile')
    })
    .catch(err => {
      console.log(err);
    });
}

