import PhotoUpload from "../components/PhotoUpload";  
import axios from "axios";
import { useState , useEffect } from "react";
import { AuthContext } from '../context/auth.context';
 
const API_URL = 'http://localhost:5005';

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  const getUserData = async () => {
		const response = await axios.get(`${API_URL}/api/users`)
		setUser(response.data)
	}
	useEffect(() => {
		getUserData()
	}, [])

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {setUser.username }</p>
      <p>Campus: </p>
      <p>Course: </p>

<PhotoUpload />
    </div>
  );
}

export default ProfilePage;
