import React, { Component } from 'react';
import AuthService from './auth.js';




class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedInUser: {},
            Clicked: false,
            username: '',
            campus: '',
            course: '',
        }
        this.service = new AuthService();

    }

    updating = () => {
        this.setState({
            Clicked: !this.state.Clicked
        })
        console.log(this.state.Clicked)
    }

    handleFormSubmit = event => {
        event.preventDefault()
        this.service.edit()
            .then(data => {
                console.log(data)
                this.setState({
                    username: '',
                    campus: '',
                    course: ''
                })
                // this.props.getUser(data)
            })

    }



    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            password: this.state.loggedInUser.password
        });
    }

    componentWillMount() {
        console.log("ah oui hein")
        this.setState({ loggedInUser: this.props.profile }, () => (console.log(this.state.loggedInUser.username)))
    }

    render() {
        return (

            <div>
                Username :{this.props.profile.username} <br></br>
                Campus : {this.state.loggedInUser.campus} <br></br>
                Course : {this.state.loggedInUser.course} <br></br>
                <button onClick={this.updating}>Edit</button>
                {
                    this.state.Clicked ? <form onSubmit={this.handleFormSubmit}>
                        <label>Username</label>
                        <input type='text' name="username" value={this.state.username} onChange={e => this.handleChange(e)}></input>
                        <label>Campus</label>
                        <input type='text' name="campus" value={this.state.campus} onChange={e => this.handleChange(e)}></input>
                        <label>Course</label>
                        <input type='text' name="course" value={this.state.course} onChange={e => this.handleChange(e)}></input>
                        <input type='text' name="password" value={this.state.loggedInUser.password} onChange={e => this.handleChange(e)} className="none"></input>
                        <input type='submit' value="VALIDER"></input>
                    </form> : ''
                }
            </div>
        )


    }
}

export default Profile;