import React, { Component } from 'react';
import AuthService from '../../src/auth/auth-services';
import axios from 'axios'

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            campus: '',
            course: '',
            image: ''
        }
        this.service = new AuthService() //===> para ter acesso aos métodos da classe AuthService
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const campus = this.state.password;
        const course = this.state.password;
        const image = this.state.password;

        this.service.signup(username, password, campus, course, image) //service.signup envia os dados a AuthService
            .then(response => {
                this.setState({
                    username: '',
                    password: '',
                    campus: '',
                    course: '',
                    image: ''
                })
                this.props.callback(response)
                this.props.history.push(`/profile/`);//como colocar o username na rota? this.props.user??

            })
            .catch(err => console.log(err))
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

    render() {

        return (
            <div className="mainDiv container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row signupRows d-flex justify-content-around">
                        <div className="col-3">
                            <h3>Signup</h3>
                            <label>Username</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={event => this.handleChange(event)}
                            />
                        </div>
                        <div className="col-3">
                            <h3>Hello!!!</h3>
                            <h5>Welcome to IronProfile</h5>
                        </div>
                    </div>

                    <div className="form-group row signupRows d-flex justify-content-around">
                        <div className="col-3">
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={event => this.handleChange(event)} />
                            </div>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>


                    <div className="form-group row signupRows d-flex justify-content-around">
                        <div className="col-3">
                            <div className="form-group">
                                <label>Campus</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="campus"
                                    value={this.state.campus}
                                    onChange={event => this.handleChange(event)} />
                            </div>
                        </div>
                        <div className="col-3">
                            <p>If you signup, you agree with all our terms and conditions where we can do watever we want with the data!</p>
                        </div>
                    </div>

                    <div className="form-group row signupRows d-flex justify-content-around">
                        <div className="col-3">
                            <div className="form-group">
                                <label>Course</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="course"
                                    value={this.state.course}
                                    onChange={event => this.handleChange(event)} />
                            </div>
                        </div>

                        <div>
                            <p>Photo</p>
                            <input
                                type="file"
                                name="image"
                                onChange={this.handleFileUpLoad}
                            />
                        </div>
                        <div className="col-3">
                            <button
                                className="btn btn-danger"
                                type="submit"
                                value="Signup">Create the Account</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}