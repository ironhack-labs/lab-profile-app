//dependencies
import React, { useContext, useState } from 'react';
import { Edit } from '@styled-icons/typicons';

// local modules
import imgPlaceholder from '../../public/images/user-placeholder.png';
import { AuthContext } from '../contexts/authContext';
import { logout, uploadPhoto } from '../services/authService';
import { EditForm } from './EditForm';

// styled components
import { SocialContent, SocialContainer } from '../styles/Signup.styled';
import { Content } from '../styles/Layout.styled';
import {
  ProfileContent,
  ImageContainer,
  LogoutLink,
  ProfileHeader,
  UploadButton,
  EditImage
} from '../styles/Profile.styled';

export const Profile = ({ history }) => {
  const { user, setUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isChanginImg, setIsChangingImg] = useState(false);

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  const handleEdit = () => setIsEditing(!isEditing);

  const handleImgEdit = () => {
    setIsChangingImg(!isChanginImg);
    setSelectedFile(null); //remove selected file if user doesn't apply the changes
  };

  const handleChangeImg = e => setSelectedFile(e.target.files[0]);

  const handleSubmit = async e => {
    e.preventDefault();
    const uploadImage = new FormData();
    uploadImage.append('image', selectedFile);
    const newImage = await uploadPhoto(uploadImage);
    setUser({ ...user, image: newImage });
    setIsChangingImg(false);
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
              <p>{user && user.username}</p>
            </div>
            <div>
              <p>Campus</p>
              <p>{user && user.campus}</p>
            </div>
            <div>
              <p>Course</p>
              <p>{user && user.course}</p>
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
          <small>
            {user && `${user.username} profile pic`}{' '}
            <EditImage size="25" onClick={handleImgEdit} />
          </small>
          {isChanginImg && (
            <>
              <form onSubmit={handleSubmit} id="upload-form">
                <input type="file" onChange={handleChangeImg} />
              </form>
              <UploadButton
                type="submit"
                form="upload-form"
                isEditing={selectedFile}
                disabled={selectedFile ? false : true}
              >
                Edit photo
              </UploadButton>
            </>
          )}
        </ImageContainer>

        <p className="small">
          You can change your profile image clicking the icon under your picture
        </p>
      </SocialContent>
    </SocialContainer>
  );
};
