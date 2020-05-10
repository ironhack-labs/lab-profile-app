import React, { useContext} from 'react';
import { AuthContext } from '../../components/Auth/AuthProvider'; 
import { Link } from 'react-router-dom';

import Input from  '../../components/Input/Input';
import AuthService from '../../components/AuthService';
import axios from 'axios';

const service = new AuthService();

const Profile = ({ history }) => {
  console.log(history)
  
    let { current, setCurrent } = useContext(AuthContext);
  
    const handleFileChange = (e) => {
      const uploadData = new FormData();
      uploadData.append("image", e.target.files[0]);
  
      const { _id } = current
  
      axios
        .patch(`http://localhost:5000/auth/upload/${_id}`, uploadData)
        .then(image =>
            setCurrent({
              ...current,
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
            <p>{current.username}</p>
            <h2>Campus</h2>
            <p>{current.campus}</p>
            <h2>Course</h2>
            <p>{current.course}</p>

            <Link to="/" onClick={() => service.logout()}>
              Logout
            </Link>
          </div>
        
          <form>
              <img src={current.image} alt={current.username}/>
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
