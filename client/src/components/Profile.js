//dependencies
import React, { useContext, useState } from 'react';
import { Edit } from '@styled-icons/typicons';

// local modules
import userImage from '../../public/images/user-placeholder.png';
import { AuthContext } from '../contexts/authContext';
import { logout } from '../services/authService';
import { EditForm } from './EditForm';

// styled components
import {
  SocialContent,
  SocialContainer,
  Button
} from '../styles/Signup.styled';
import { Content } from '../styles/Layout.styled';
import {
  ProfileContent,
  ImageContainer,
  LogoutLink,
  ProfileHeader
} from '../styles/Profile.styled';

export const Profile = ({ history }) => {
  const { user, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  const handleEdit = () => setIsEditing(!isEditing);

  return (
    <SocialContainer>
      <Content>
        <ProfileHeader>
          <h1>Profile</h1>
          <Edit size="35" onClick={handleEdit} />
        </ProfileHeader>
        {!isEditing ? (
          <ProfileContent>
            <div>
              <p>Usename</p>
              <p>{(user && user.username) || 'Unknown'}</p>
            </div>
            <div>
              <p>Campus</p>
              <p>{(user && user.campus) || 'Unknown'}</p>
            </div>
            <div>
              <p>Course</p>
              <p>{(user && user.course) || 'Unknown'}</p>
            </div>
            <div>
              <LogoutLink to="/" onClick={handleLogout}>
                Logout
              </LogoutLink>
            </div>
          </ProfileContent>
        ) : (
          <EditForm history={history} setEditStatus={handleEdit} />
        )}
      </Content>
      <SocialContent>
        <ImageContainer>
          <img src={userImage} alt="" />
          <Button>Edit photo</Button>
        </ImageContainer>

        <p className="small">You can change your profile image 📷</p>
      </SocialContent>
    </SocialContainer>
  );
};
