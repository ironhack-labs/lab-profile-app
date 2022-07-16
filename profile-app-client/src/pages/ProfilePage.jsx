import PhotoUpload from "../components/PhotoUpload";  
import { useState , useEffect , useContext } from "react";
import { AuthContext } from '../context/auth.context';


const ProfilePage = () => {
  
  const [userPhotos, setUserPhotos] = useState(null);
  const {  isLoggedIn, user , isLoading } = useContext(AuthContext);

  return (
    <div>
      <h1>Profile Page</h1>
      { isLoggedIn && user &&
      <div>
      <p>Welcome {user.username}</p> 
      <p>Username: { user.username }</p>
      <p>Campus:{user.campus} </p>
      <p>Course: {user.course} </p>
    <img src={user.img} alt="img" />  

<PhotoUpload />
      </div>
}
    </div>
  );
}

export default ProfilePage;
