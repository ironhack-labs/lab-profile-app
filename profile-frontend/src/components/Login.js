import React, { Component } from 'react';
import AuthService from '../../src/auth/auth-services';


export default class Login extends Component {
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
        this.service.login(username, password) //service.login envia os dados a AuthService
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
        return (
            <div className="mainDiv container">
                <div className="row">
                    <div className="col info-login">
                        <h4>Login</h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="username"
                                    value={this.state.username}
                                    onChange={event => this.handleChange(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={event => this.handleChange(event)} />
                            </div>
                            <button
                                className="btn btn-logs"
                                type="submit"
                                value="Login" >Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}