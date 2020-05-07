
import React, { Component } from "react";
import axios from "axios";
import AuthService from "../components/authService";
import { Link } from 'react-router-dom'



class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      campus: null,
      course: null,
      imageUrl: null,

    };

    this.service = new AuthService();
    this.handleFileChange = this.handleFileChange.bind(this)
  }


  componentDidMount() {
    if(this.props.user) {
      this.setState({
      username: this.props.user.username,
      campus: this.props.user.campus,
      course: this.props.user.course,
      imageUrl: this.props.user.imageUrl,
      })
    } 
 }

 componentDidUpdate() {
  if(!this.props.user) {
    this.setState({
    username: this.props.user.username,
    campus: this.props.user.campus,
    course: this.props.user.course,
    // imageUrl: this.props.user.imageUrl,
    })
  } 
}



// CHANGE IMG
  handleFileChange(event) {
    const uploadData = new FormData();
    uploadData.append('imageUrl', event.target.files[0])
    uploadData.append('username', this.state.username)
    console.log(uploadData)

    axios.post("http://localhost:5000/api/auth/upload", uploadData)
    .then(response => this.setState({ imageUrl: response.data.secure_url}))
    .catch(error => console.log(error))
  }



    render() {
      const {username, campus, course, imageUrl} = this.state
      console.log(this.props.user)
      return (
        
        <div>
        { 
          this.props.user ? (
           
           <div>
            <h2>Infos</h2>
            <p>{username}</p>
            <p>{campus}</p>
            <p>{course}</p>
            <p>OI</p>
            <img src={imageUrl} alt="img"/>
            <p>Dani ama react s2</p>
            <p>snadjksn</p>

            <form>
                <input 
                    type="file" 
                    name="imageUrl"
                    onChange={this.handleFileChange} /> 
                <button type="submit">Save new thing</button>
            </form>
            <Link to="/" onClick={() => this.props.logout()} >Logout</Link>
            </div>
            ) : (
              <p>loading</p>
            )   
        }
      
</div>
      );
    }
  }

  

  export default Profile;