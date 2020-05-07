import React, { Component } from 'react';
import AuthService from './auth/auth-service';
import { Link } from 'react-router-dom';
import axios from "axios";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", campus: "", course: "", imagePath: "" };
        this.handleFileChange=this.handleFileChange.bind(this)
    }

    handleFileChange(event) {

        const uploadData = new FormData();
    
        uploadData.append("imageUrl", event.target.files[0]);
        // console.log(uploadData);
    
        axios
          .post("http://localhost:5000/api/upload", uploadData)
          .then((response) =>
            this.setState({
              imagePath: response.data.secure_url,
            })
          )
          .catch((error) => console.log(error));

    }

    render() {
        return (
            <>
            <div>
              <h1>Profile</h1>
              <form>
                <div>
                  <label>Username</label>
                  <input value={this.state.username}></input>
                </div>
                <div>
                  <label>Campus</label>
                  <input value={this.state.campus}></input>
                </div>
                <div>
                  <label>Course</label>
                  <input value={this.state.course}></input>
                </div>
              </form>
              {/* <Link onClick={}>Logout</Link> */}
            </div>
            <div>
              <img src={this.state.imagePath}></img>
              <button>Edit photo</button>
              <p>
                the user is able to upload a new profile photo, using NodeJS and
                Multer uploader.
              </p>
            </div>
          </>
        )
    }

}
export default Profile;