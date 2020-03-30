// dependencies
import React, { useContext, useState } from 'react';

// local modules
import { AuthContext } from '../../context/authContext';
import { editProfile } from '../../services/authService';

// styled components
import { Form, Button } from '../styles/Signup.styled';
import { ProfileContent } from '../styles/Profile.styled';

export const EditForm = ({ history, setEditStatus }) => {
  const { user, setUser } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user);

  const handleSubmit = async e => {
    e.preventDefault();

    const editedUser = await editProfile(currentUser);
    setUser(editedUser);
    setEditStatus();
    const formatted = editedUser.username.replace(' ', '').toLowerCase();
    history.push(`/${formatted}`);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  return (
    <ProfileContent>
      <Form onSubmit={handleSubmit} id="edit-form">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={currentUser.username}
          placeholder={user.username}
          onChange={handleChange}
        />
        <label htmlFor="campus">Campus</label>
        <input
          type="text"
          name="campus"
          value={currentUser.campus}
          placeholder={user.campus}
          onChange={handleChange}
        />
        <label htmlFor="course">Course</label>
        <input
          type="text"
          name="course"
          value={currentUser.course}
          placeholder={user.course}
          onChange={handleChange}
        />
      </Form>
      <div>
        <Button type="submit" form="edit-form">
          Apply changes
        </Button>
      </div>
    </ProfileContent>
  );
};