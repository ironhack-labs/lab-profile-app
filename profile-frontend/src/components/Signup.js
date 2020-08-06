import React, { Component } from 'react';
import AuthService from '../../src/auth/auth-services';

export default class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }
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
        this.service.signup(username, password) //service.signup envia os dados a AuthService
            .then(response => {
                this.setState({
                    username: '',
                    password: ''
                })
                this.props.callback(response)
                this.props.history.push(`/profile/`);//como colocar o username na rota? this.props.user??

            })
            .catch(err => console.log(err))
    }


    render() {
        console.log('props: ', this.props)

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
                                    type="password"
                                    name="password"
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
                                <label>Cours</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={this.state.course}
                                    onChange={event => this.handleChange(event)} />
                            </div>
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