import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiService from '../../api/service';
import AuthService from '../auth/Auth-service'

export default class Profile extends Component {
  constructor(props) {
		super(props);
    this.state = { username: '', campus: '', course: '', imageUrl: ''};
    this.authService = new AuthService();
    this.apiService = new apiService();
    this.userLoad()
	}
  
  handleSubmitUpdateUsername = e => {
    e.preventDefault()

    this.authService.updateUsername(this.state.username).then(usernameUpdateConfirmation =>{

      let newState = {
        ...this.state,
        username: usernameUpdateConfirmation.newUsername
      }

      if (usernameUpdateConfirmation.userUpdated) {
        newState.showTickOk = true
      }
      
      this.setState(newState)
    })
  }

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("imageUrl", e.target.files[0]);
    this.apiService.handleUpload(uploadData)
    .then(response => {
      this.setState({...this.state, imageUrl: response.secure_url})
    })
    .catch(err => {
      console.log("Error while uploading the file: ", err);
    });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.apiService.saveNewPhoto(this.state)
    .then(res => {
      console.log('added: ', res);
    })
    .catch(err => {
      console.log("Error while adding the photo: ", err);
    });
  }  
  
  handleChange(e) {
    this.setState({
      ...this.state,
      file: e.target.files[0]
    })
  }
  
  handleChangeUsername(e) {
    this.setState({
      ...this.state,
      username: e.target.value
    })
  }
  
  logoutUser = () =>{
    this.authService.logout()
    .then((data) => {     
      this.setState({ loggedInUser: null });
    })
  }
  
  userLoad() {
    this.authService.loggedin()
    .then(user=>this.setState({...this.state,user}));
	}
  
  render() {
    console.log(this.state.user)
    if(this.state.user){
      return(
        <div>
        <h1>Profile</h1>
        <ul>
          <p>Image</p>
          <li>{this.state.user.imageUrl}</li>
          <p>Username</p>
          <li>{this.state.user.username}</li>
          <p>Campus</p>
          <li>{this.state.user.campus}</li>
          <p>Course</p>
          <li>{this.state.user.course}</li>
        </ul>
        <h2>Photo Upload</h2>

        {(this.state.showTickOk) ? <p>updated ok</p> : ""}

        <form onSubmit={(e)=>this.handleSubmitUpdateUsername(e)}>
          <input type="text" value={this.state.username} onChange={(e)=>this.handleChangeUsername(e)} />
          <input type="file" onChange={(e) => this.handleFileUpload(e)}/>  <br/>
          <button type="submit">Save Profile</button>
        </form>

         {/* <img key={this.state.imageUrl} src={this.state.imageUrl} alt="" /> */}
          <Link to='/'>
            <button onClick={() => this.logoutUser()}>Logout</button>
          </Link> 
      </div>
    )
    }else{
      return(
        <h1>LOADING...</h1>
      )
    }
  }
}
