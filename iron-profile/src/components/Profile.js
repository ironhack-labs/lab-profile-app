import React, {Component} from 'react';
import AuthService from '../auth/auth-service';
import {Link} from 'react-router-dom';
import CompleteSubmit from './CompleteSubmit';
import LoadingInfo from './LoadingInfo';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            username: '',
            campus: '',
            course: '',
            image: '',
            file: '',
            saved: false,
            loading: false
        };
        this.reloadProfile = this
            .reloadProfile
            .bind(this)
        this.service = new AuthService();

    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            _id: this.props.loggedInUser._id,
            username: this.props.loggedInUser.username,
            campus: this.props.loggedInUser.campus,
            course: this.props.loggedInUser.course,
            image: this.props.loggedInUser.image,
            file: null,
            saved: false,
            loading: false
        });
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
        console.log(this.state);
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const campus = this.state.campus;
        const course = this.state.course;
        this
            .service
            .edit(username, campus, course)
            .then((response) => {
                console.log(response)
                this
                    .props
                    .callback(response);
                this
                    .props
                    .history
                    .push('/profile');
            })
            .catch((error) => console.log(error));
    };

    handleImageChange = (event) => {
        console.log(this.state.file)
        event.preventDefault();
        this.setState({
            ...this.state,
            loading: true
        });
        this
            .service
            .upload(this.state.file)
            .then((response) => {

                console.log('response', response)
                this
                    .props
                    .callback(response);
                this.setState({
                    ...this.state,
                    loading: false,
                    saved: true,
                    image: response.image
                });
                setTimeout(this.reloadProfile, 2000);
            })
            .catch((err) => console.log(err));
    };

    reloadProfile() {
        this.setState({
            ...this.state,
            loading: false,
            saved: false
        });
        this
            .props
            .history
            .push('/profile');
    }

    handleFileUpload = (event) => {
        console.log(event.target.files[0])
        this.setState({
            ...this.state,
            file: event.target.files[0]
        });
    };

    render() {
        if (this.state.loading) {
            return <LoadingInfo/>;
        } else if (this.state.saved) {
            return <CompleteSubmit/>;
        } else {
            return (
                <div className='container'>
                    <div className='auth-form'>
                        <h1>Profile</h1>
                        <form>
                            <label htmlFor='username'>Username:</label>
                            <input
                                type='text'
                                name='username'
                                value={this.state.username}
                                onChange={(e) => this.handleChange(e)}/>
                            <label htmlFor='campus'>Campus:</label>
                            <select
                                name='campus'
                                onChange={e => this.handleChange(e)}
                                value={this.state.campus}>
                                <option value=''></option>
                                <option value='Madrid'>Madrid</option>
                                <option value='Barcelona'>Barcelona</option>
                                <option value='Miami'>Miami</option>
                                <option value='Paris'>Paris</option>
                                <option value='Berlin'>Berlin</option>
                                <option value='Amsterdam'>Amsterdam</option>
                                <option value='México'>México</option>
                                <option value='Sao Paulo'>Sao Paulo</option>
                                <option value='Lisbon'>Lisbon</option>
                            </select>
                            <div>
                                <label htmlFor='course'>Course:</label>
                                <select
                                    name='course'
                                    onChange={e => this.handleChange(e)}
                                    value={this.state.course}>
                                    <option value=''></option>
                                    <option value='Web Dev'>Web Dev</option>
                                    <option value='UX/ UI'>UX/ UI</option>
                                    <option value='Data Analytics'>Data Analytics</option>
                                </select>
                            </div>
                        </form>
                        <div className='link-zone'>
                            <form onSubmit={this.handleFormSubmit}>
                                <input className='auth-button' type='submit' value='Save the Changes'/>
                            </form>
                            <div>
                                <Link
                                    style={{
                                    color: 'red'
                                }}
                                    to='/logout'>
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                        <img className='display-image' key={this.state.image} src={this.state.image} alt={this.state.username}/>
                        <form onSubmit={this.handleImageChange}>
                            <input
                                className='auth-button'
                                type='file'
                                name='image'
                                onChange={this.handleFileUpload}/>
                            <input className='auth-button' type='submit' value='Save Photo'/>
                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default Profile;