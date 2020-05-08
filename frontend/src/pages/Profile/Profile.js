import React from 'react';

import { Link } from 'react-router-dom';

import Input from  '../../components/Input/Input';
import AuthService from '../../components/AuthService';

const service = new AuthService();

const Profile = ({user, image, handleFileChange}) => 
    <div className="container__profile">
        <div>

          <h1 className="title">Profile</h1>
          <h2>Username</h2>
          <p>{user.username}</p>
          <h2>Campus</h2>
          <p>{user.campus}</p>
          <h2>Course</h2>
          <p>{user.course}</p>

          <Link to="/" onClick={() => service.logout()}>
            Logout
          </Link>

        
        </div>
        
        <form>
            <img src={image} alt={user.username}/>
            <Input 
                type="file" 
                name="image" 
                handleInputChange={handleFileChange} 
            >Image</Input>             
        </form>
    </div>

export default Profile;
