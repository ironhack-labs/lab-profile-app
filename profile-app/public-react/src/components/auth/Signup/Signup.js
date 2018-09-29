import React, { Component } from 'react';
import AuthService from '../auth-service';
import AppButton from '../../../components/UI/AppButton/AppButton';
import './Signup.css';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            campus: '',
            course: '',
            error: ''
        };

        this.service = new AuthService();
    }

    handleFormSubmit = () => {
        const { username, password, course, campus } = this.state;
        const { history } = this.props;


        this.service.signup(username, password, campus, course)
            .then( response => {
                this.setState({
                    username: "",
                    password: "",
                    course: "",
                    campus: ""
                });

                this.props.getUser(response);
                history.push('/profile');

            })
            .catch( error => {
                this.setState({
                    error: "Something went wrong!"
                });

                setTimeout(() => {
                    this.setState({
                        error: ""
                    });
                }, 2000);
            } )
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };


    render(){

        const error = this.state.error ? (
            <div className="alert">{ this.state.error }</div>
        ) : null;

        return(
            <div className="home-wrapper sign-wrap">
                <div className="form-wrap">
                    <h1 className="sign-head">Sign up</h1>
                    <form className="sign-form">
                        { error }
                        <label>Username:</label>
                        <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)} required/>

                        <label>Password</label>
                        <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} required minLength="8"/>

                        <label>Campus</label>
                        <select type="text" name="campus" value={this.state.campus} onChange={ e => this.handleChange(e)}>
                            <option value="Madrid">Madrid</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Miami">Miami</option>
                            <option value="Paris">Paris</option>
                            <option value="Berlin">Berlin</option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Sao Paolo">Sao Paolo</option>
                        </select>

                        <label>Course</label>
                        <select type="text" name="course" value={this.state.campus} onChange={ e => this.handleChange(e)}>
                            <option value="WebDev">WebDev</option>
                            <option value="UX/UI">UX/UI</option>
                            <option value="Data Science">Data Science</option>
                        </select>
                    </form>
                </div>
               <div className="btn-wrap">
                   <h3>Hello!!</h3>
                   <p className="main-text">Welcome to IronProfile!</p>
                   <p className="sub-text">If you sign, you agree with all our terms and conditions where we can do whatever we want with the data!</p>
                   <AppButton bg="white" type="submit" className="sign-btn" clicked={ this.handleFormSubmit }>Create the account</AppButton>
               </div>

            </div>
        )
    }
}

export default Signup;