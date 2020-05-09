import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../UserContext' 
import { Link } from 'react-router-dom';

import Input from  '../../components/Input/Input';
import AuthService from '../../components/AuthService';
import axios from 'axios';

const service = new AuthService();

const Profile = ({ history }) => {
  console.log(history)
  
    let { user, setUser } = useContext(UserContext);

    // useEffect(() => history.push('/profile'), [ user ])
  
    const handleFileChange = (e) => {
      const uploadData = new FormData();
      uploadData.append("image", e.target.files[0]);
  
      const { _id } = user
  
      axios
        .patch(`http://localhost:5000/auth/upload/${_id}`, uploadData)
        .then(image =>
            setUser({
              ...user,
              image
            })
        )
        .catch((error) => console.log(error));
    }
    
    return (
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
              <img src={user.image} alt={user.username}/>
              <Input 
                  type="file" 
                  name="image" 
                  handleInputChange={handleFileChange} 
              >Image</Input>             
          </form>
      </div>
    )
}

export default Profile;
