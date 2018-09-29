import React, { Component, Fragment } from 'react';
import './ProfilePage.css';
import AppButton from '../../components/UI/AppButton/AppButton';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';


class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.authService = new AuthService();
    }

    state = {
        file: this.props.userInSession.image,
        showImage: !!this.props.userInSession.image
    };

    handleChange(e) {
        this.setState({
            file: e.target.files[0]
        })
    };

    handleSubmit = () => {
        this.authService.addPicture(this.state.file)
            .then( data => {
               this.setState({
                   file: data.image,
                   showImage: true
               })
            });
    };

    selectPhoto = () => {
      this.input.click();
    };

    render() {
        return (
            <div className="home-wrapper profile-blog">
                <div className="info">
                    <h1 className="header-info">Profile</h1>
                    <div className="user-info info-name">
                        <h3>Username</h3>
                        <p>{ this.props.userInSession ? this.props.userInSession.username : null }</p>
                    </div>
                    <div className="user-info">
                        <h3>Campus</h3>
                        <p>{ this.props.userInSession ? this.props.userInSession.campus : null }</p>
                    </div>
                    <div className="user-info">
                        <h3>Course</h3>
                        <p>{ this.props.userInSession ? this.props.userInSession.course : null }</p>
                    </div>
                    <AppButton bg="white"><Link className="Log-link" to="/logout" onClick={() => this.props.logout(this.props.history) }>Logout</Link></AppButton>
                </div>
                <div className="info info-loader">
                    {
                        !this.state.showImage ? (
                            <Fragment>
                                <i className="fa fa-user-circle circle" onClick={ this.selectPhoto }></i>
                                <input className="photo-loader" ref={ (node) => this.input = node } onChange={(e)=>this.handleChange(e)} name="picture"  type="file"/>
                                <AppButton bg="white" clicked={ this.handleSubmit }>Edit Photo</AppButton>
                                <p className="text-uploader">The user is able to upload a new profile photo, using Node.js and Multer uploader.</p>
                            </Fragment>

                        ) : (
                            <Fragment>
                                <div className="img-user">
                                    <img src={ this.state.file } alt="user"/>
                                </div>
                                <p className="text-hint">You can choose another picture.</p>
                                <AppButton bg="white" clicked={ () => this.setState({ showImage: false }) }>Edit Photo</AppButton>
                            </Fragment>

                        )
                    }

                </div>
            </div>

        );
    }
}

export default ProfilePage;