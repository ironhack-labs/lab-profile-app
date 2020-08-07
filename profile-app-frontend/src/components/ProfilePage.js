import React, { useState, useEffect } from 'react';
import AuthService from '../services/authService';
import { useHistory } from 'react-router-dom';

const ProfilePage = (props) => {
  const { username, campus, course, image } = props.loggedInUser;
  const initialState = {
    username: '',
    campus: '',
    course: '',
    image: '',
    file: '',
  };
  const [state, setState] = useState(initialState);
  let history = useHistory();
  const service = new AuthService();

  useEffect(
    () =>
      setState({
        username: username,
        campus: campus,
        course: course,
        image: image,
        file: null,
      }),
    [username, campus, course, image]
  );

  const handleChangeImage = (e) => {
    setState({
      ...state,
      file: e.target.files[0],
    });
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    const uploadImage = new FormData();
    uploadImage.append('image', state.file);
    service.upload(uploadImage).then((res) => setState(res));
    history.push('/profile');
  };

  return (
    <div id="profilePage">
      <h1>Profile</h1>
      <div className="content-wrapper">
        <div className="col left">
          <ul>
            <li>
              <span>Username</span>
              {state.username}
            </li>
            <li>
              <span>Campus</span>
              {state.campus}
            </li>
            <li>
              <span>Course</span>
              {state.course}
            </li>
          </ul>
        </div>
        <div className="col right">
          <div className="avatar">
            <img key={state.image} src={state.image} alt={state.username} />
          </div>
          <form onSubmit={handleSubmitImage}>
            <input type="file" name="image" onChange={handleChangeImage} />
            <button type="submit">Edit Photo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
