import React, { Component } from "react";
import AuthService from './auth/auth-service';
import "../components/Home.css";

class AddPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
          imageUrl: "https://dt35u97zq4oy7.cloudfront.net/img/about/default-thumbnail.1df9d1d2022f.png"
        };
        this.service = new AuthService();
    }

    componentDidMount() {
      this.setState({...this.state, imageUrl: this.props.imageUrl});
    }
  
  
    componentWillReceiveProps(nextProps) {
      this.setState({ ...this.state, imageUrl: nextProps["imageUrl"] });
    }

    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        this.service.handleUpload(uploadData)
        .then(response => {
            this.setState({ imageUrl: response.secure_url });
            this.service.updatePhotoProfile({ imageUrl: response.secure_url })
            .then(response => {
                console.log(response);
            })
          }).catch(err => {
            console.log("Error while uploading the file: ", err);
          });
    }
    
    render() {
        return (
          <div>
    
            <div className="photo">
                <img src={this.state.imageUrl} alt="user profile" />

            <form onSubmit="">
                <input type="file" onChange={(e) => this.handleFileUpload(e)} /> 
            </form>
            </div>
          </div>
        );
    }
}

export default AddPhoto;