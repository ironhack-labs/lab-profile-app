import axios from 'axios';

const base_url = `http://localhost:3000/auth`;

export const auth = (auth, match, history) => {
  let route = match.path === `/signup` ? `signup` : `login`;

  axios.post(`${base_url}/${route}`, auth)
       .then( res => {
          const {token, user} = res.data;

          if (token) {
            localStorage.setItem(`token`, token);
            localStorage.setItem(`user`, JSON.stringify(user));
          }
          
          history.push(`/profile`);
       })
       .catch( err => console.log(err) );
};

export const upload = (user, id) => {
  let formData = new FormData();

  Object.keys(user).forEach( key => formData.append(key, user[key]) );

  return axios.patch(`${base_url}/upload/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
};

export const edit = () => {};

export const logout = history => {
  localStorage.clear();
  return history.push(`/`);
};

export const loggedin = token => (
  axios.get(`${base_url}/loggedin`, { headers: { 'x-access-token': token } } )
);