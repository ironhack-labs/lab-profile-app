import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";

import UserDefaultImg from '../assets/user.png';
import service from "../services/auth.service";

function HomePage(){

    const authValue = useContext(AuthContext);

    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
        const uploadData = new FormData();
     
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new movie in '/api/movies' POST route
        uploadData.append("image", e.target.files[0]);
     
        service
          .uploadPhoto(uploadData)
          .then(response => {
            if(response.data && response.data.image) {
                service.editUser({ image: response.data.image })
                .then(() => {
                    authValue.getUserDetails()
                })
                .catch()
            }
            
          })
          .catch(err => console.error("Error while uploading the file: ", err));
      };


    if(authValue.isLoading) {
        <p>Loading...</p>
    }

    return(
        <>
            {
                authValue.isLoggedIn ? (
                    <section className="profile-container">
                        <div>
                            <h1>Profile</h1>
                            <p>Username</p> 
                            <h3>{authValue.user.username}</h3>  
                            <p>Campus</p>    
                            <h3>{authValue.user.campus}</h3> 
                            <p>Course</p>   
                            <h3>{authValue.user.course}</h3>  
                            <button onClick={authValue.logOutUser}>Logout</button>   
                        </div>
                        <div>
                            <img src={authValue.user.image ? authValue.user.image : UserDefaultImg} alt="user" height={90} width={90}/>
                            <input type="file" onChange={handleFileUpload} id=""/>   
                        </div>
                    </section>
                ) : (
                    <section>
                        <h1>IronProfile</h1>
                        <p>Today we will create an app with some cool style!</p>
                        <div className="signinContainer">
                            <Link to={'/signup'}><button>Signup</button></Link>
                            <Link to={'/login'}><button>Login</button></Link>
                        </div>
                    </section>
                )
            }
        </>
    )
}
export default HomePage;