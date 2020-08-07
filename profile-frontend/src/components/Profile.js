import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loggedInUser: null, 
            image: '', 
    
        };
    }

    handleFileUpLoad = (event) => {
        console.log("file upload...")
        const uploadData = new FormData()
        uploadData.append("image", event.target.files[0])
        axios.post('http://localhost:3001/api/upload', uploadData)
            .then(response => {
                console.log("file uploaded sucessfully", response.data)
                this.setState({
                    image: response.data.path
                })
            })
    }

    savePhoto = (event) => {
        //axios faz um put no /edit, no backend
        //envia a path da imagem (this.state.image)
        axios.put('http://localhost:3001/api/edit', {image: 'bla'}, {withCredentials: true}) 
        .then()
    }

    render() {
        return (
            <div className="mainDiv container">
                <div className="row profile-div">
                    <div className="col-7 profile-info">
                        <h3 className="mb-5">Profile</h3>
                        <p className="mb-0">Username</p>
                        <h4 className="mb-3">{this.props.state.loggedInUser.username}</h4>
                        <p className="mb-0">Campus</p>
                        <h4 className="mb-3">{this.props.state.loggedInUser.campus}</h4>
                        <p className="mb-0">Course</p>
                        <h4 className="mb-3">{this.props.state.loggedInUser.course}</h4>
                        <NavLink to="/logout" className="nav-link">Logout</NavLink>
                    </div>
                    <div className="col info-div-photo">
                        <img className="profilePhoto" src={this.props.state.loggedInUser.image} alt={this.props.user.username} />
                        <div>
                            <input
                                type="file"
                                name="image"
                                onChange={this.handleFileUpLoad}
                            />
                        </div>
                        <button onClick={this.savePhoto} className="btn btn-signup">Change Photo</button>
                        <p className="text">The user is able to upload a new profile photo using NodeJs and Multer uploader</p>
                    </div>
                </div>
            </div>
        )
    }
}
