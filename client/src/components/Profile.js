//dependencies
import React, { useContext, useState } from 'react';
import { Edit } from '@styled-icons/typicons';

// local modules
import imgPlaceholder from '../../public/images/user-placeholder.png';
import { AuthContext } from '../contexts/authContext';
import { logout, uploadPhoto } from '../services/authService';
import { EditForm } from './EditForm';

// styled components
import {
  SocialContent,
  SocialContainer,
  UploadButton
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
  const [image, setImage] = useState();

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  const handleEdit = () => setIsEditing(!isEditing);

  const handleChange = e => setImage(e.target.files[0]);

  const handleSubmit = async e => {
    e.preventDefault();
    const uploadImage = new FormData();
    uploadImage.append('image', image);
    const newImage = await uploadPhoto(uploadImage);
    setUser({ ...user, image: newImage });
    setIsEditing(false);
  };

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
          <img src={(user && user.image) || imgPlaceholder} alt="" />
          {isEditing && (
            <>
              <form onSubmit={handleSubmit} id="upload-form">
                <input type="file" onChange={handleChange} />
              </form>
              <UploadButton
                type="submit"
                form="upload-form"
                isEditing={image}
                disabled={image ? false : true}
              >
                Edit photo
              </UploadButton>
            </>
          )}
        </ImageContainer>

        <p className="small">You can change your profile image 📷</p>
      </SocialContent>
    </SocialContainer>
  );
};
