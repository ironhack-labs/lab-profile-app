import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Typography, Input } from 'antd';
import axios from 'axios';
import { updatePhoto, getCurrentUser } from '../services/auth';
import { Context } from '../context';

const { Title, Text } = Typography;

const Profile = () => {
  const { user, loginUser } = useContext(Context);
  const uploadImageUrl = async (e) => {
    console.log(`inside Upload func`);
    const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('upload_preset', 'lab-ironprofile-ahe');

    const {
      data: { secure_url },
    } = await axios.post(
      'https://api.cloudinary.com/v1_1/vicaty/image/upload',
      data
    );
    console.log(data, secure_url);
    await updatePhoto(secure_url);
    const { user } = await getCurrentUser();
    loginUser(user);
  };

  return user ? (
    <div>
      <center>
        <div
          style={{
            width: '70vw',
            marginTop: '15px',
            backgroundColor: '#638165',
            color: 'white',
            borderRadius: '10px',
          }}
        >
          <Title style={{ color: 'white' }} level={1}>
            {user.username.toUpperCase()}
          </Title>
          <h3 style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </h3>
          <img
            style={{ width: '300px', borderRadius: '50%' }}
            src={user.image}
            alt="profile-picture"
          />

          <input
            type="file"
            name="image"
            id="image"
            onChange={uploadImageUrl}
          />
        </div>
      </center>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default Profile;
