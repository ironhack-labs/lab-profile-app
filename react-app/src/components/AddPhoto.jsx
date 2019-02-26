import React, { Component } from "react";
import AuthService from './auth/auth-service';

class AddPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imageUrl: "https://dt35u97zq4oy7.cloudfront.net/img/about/default-thumbnail.1df9d1d2022f.png"
        };
        this.service = new AuthService();
    }

    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        this.service.handleUpload(uploadData)
        .then(response => {
            this.setState({ imageUrl: response.secure_url });
            // this.service.updateProfile({ imageUrl: response.secure_url })
            // .then(response => {
            //     console.log(response);
            // })
          }).catch(err => {
            console.log("Error while uploading the file: ", err);
          });
    }
    
    render() {
        return (
          <div>
            <h2>New Thing</h2>

            <div>
                <img src={this.state.imageUrl} alt="user profile" />
            </div>

            <form onSubmit="">
                <input type="file" onChange={(e) => this.handleFileUpload(e)} /> 
            </form>
          </div>
        );
    }
}

export default AddPhoto;