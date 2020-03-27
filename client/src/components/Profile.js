//dependencies
import React, { useContext } from 'react';

// local modules
import { AuthContext } from '../contexts/authContext';
import userImage from '../../public/images/user-placeholder.png';

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
  LogoutLink
} from '../styles/Profile.styled';

export const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <SocialContainer>
      <Content>
        <h1>Profile</h1>
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
            <LogoutLink to="/">Logout</LogoutLink>
          </div>
        </ProfileContent>
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
