import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth-service';

class Signup extends  Component{

    constructor(props){
        super(props);

        this.state = {
            username:"",
            password:"",
            campus: "",
            course: "",
            errorMsgUsername: null,
            errorMsgPassword: null,
        }

        this.service = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    handleFormSubmit(event) {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        const campus = this.state.campus;
        const course = this.state.course;

        this.service
          .signup(username, password, campus, course)
          .then((response) => {
            this.setState({
              username: "",
              password: "",
              campus: "",
              course: "",
              errorMsgUsername: null,
              errorMsgPassword: null,
            });
            console.log(response);
            this.props.getUser(response);
            this.props.history.push("/login");
          })
          .catch((error) => {
            const { message } = error.response.data;
            message.includes("password")
              ? this.setState({
                  errorMsgPassword: message,
                })
              : this.setState({
                  errorMsgUsername: message,
                });
            console.log(message);
          });
    }


    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }

    render() {
        return(
            <div>

                <form onSubmit={this.handleSubmit}>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="username"
                        value={this.state.username} 
                        placeholder="e.g Alex Smith" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                    <input 
                        className="input" 
                        type="password" 
                        name="password"
                        value={this.state.password}  
                        placeholder="*****" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Campus</label>
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="campus"
                        value={this.state.campus}
                        placeholder="Sao Paulo or Madrid or  Barcelona or Miami or Parisor Berlin or Amsterdam or Mexico or Lisbon" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Course</label>
                    <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        name="course"
                        value={this.state.course} 
                        placeholder="WebDev or UX/UI or Data Analytics" 
                        onChange={this.handleChange}
                        />
                    </div>
                </div>
                <input className="button" type="submit" value="Create the Account" />
            </form>
            <p>
                Already have account?
                <Link to={"/login"}> Login</Link>
            </p>
            </div>
        );
    }
}

export default Signup;
