import React, { Component } from 'react';
import api from '../../api';
import Button from '../Button';
import AuthService from '../Auth/AuthService';
import {Redirect} from 'react-router-dom';

export default class Profile extends Component {
	constructor() {
		super();
		this.state = {
			file: null,
			actualFile: false,
			user:null
		};
		this.authService = new AuthService();
	}
	handleChange(e) {
		this.setState({
			file: e.target.files[0]
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		this.authService.loggedin().then(user=>{
			api.addPicture(this.state.file,user._id).then((res)=>{
				this.setState({actualFile : res.image});
			});
		});
		
	}
	componentDidMount() {
		this.authService.loggedin()
			.then(user=>this.setState({...this.state,user}));
	}
	render() {
		return (this.state.user) ? (
			<div>
				<img
					src={
						this.state.actualFile
							? this.state.actualFile
							: 'https://ceslava.com/blog/wp-content/uploads/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png'
					}
				/>
				<form onSubmit={e => this.handleSubmit(e)}>
					<input type="file" onChange={e => this.handleChange(e)} />
					<Button type={'submit'}> Send </Button>
				</form>
			</div>
		): <h1>You are not loggedin</h1>;
	}
}
