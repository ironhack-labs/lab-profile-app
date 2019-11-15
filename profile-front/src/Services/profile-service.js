import axios from 'axios';

// Export upload function, which receives the file as parameter to afterwards process it in the backend
// and save it into cloudinary. That's why we will have the file and not an URL, that will be done by multer
export const upload = (file) => {
  
  // Return a call to our /signup route, while sending the parameters obtained from the form/front-end
  return axios.post('http://localhost:3000/api/upload', {file});

}

// Export edit function, which receives the username, campus and course as parameters to afterwards update them
// in the back-end using mongoose and the User.update() function.
export const edit = (username, campus, course) => {
  
  // Return a call to our /login route, while sending the parameters obtained from the form/front-end
  return axios.post('http://localhost:3000/api/edit', {username, campus, course});

}