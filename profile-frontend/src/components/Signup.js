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
                <div className="row">
                    <div className="col-6 info-div">
                        <h4>Signup</h4>
                        <form onSubmit={this.handleSubmit}>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={this.state.username}
                                onChange={event => this.handleChange(event)}
                            />
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={event => this.handleChange(event)} />
                            <button
                                className="btn btn-logs"
                                type="submit"
                                value="Signup" >Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}