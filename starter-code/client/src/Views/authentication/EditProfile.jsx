import React, { Component } from 'react'
import {editProfile as editProfileService} from './../../Services/authentication'


class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      course: this.props.user.course,
      campus: this.props.user.campus
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.editSubmission = this.editSubmission.bind(this);
  };

  async editSubmission(event) {
  event.preventDefault();
  const {username, course, campus} = this.state;
  console.log('username I am sending in the submission form', username);
  try {
    await editProfileService({username, campus, course});
    this.props.loadUserInformation();
    this.props.history.push(`/private`);
  } catch(error) {
    console.log(error);
    //HERE WE CAN REDIRECT FOR AN ERROR PAGE --> NOT POSSIBLE TO SIGN UP
  }
  }

  handleInputChange(event) {
    const nameOfState = event.target.name;
    const valueOfInput = event.target.value;
    this.setState({
      [nameOfState]: valueOfInput
    });
  }

  render() {
    console.log('props in render edit profile', this.props);
    const user=this.props.user;
    return (
      <div className='text-center border m-5 border-success p-5'>
        <h1>Edit Your Profile</h1>
        <img src={user.image} alt="Your Picture"  style={{"maxWidth": "50%"}}/>
        <form onSubmit={this.editSubmission} className='d-flex flex-column'>
        <label htmlFor="username">Username</label><input type="text" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder={`${this.state.username}`}/>
        <label htmlFor="campus">Campus</label><input type="text" name="campus" value={this.state.campus} onChange={this.handleInputChange} placeholder={`${this.state.course}`}/>
        <label htmlFor="course">Course</label><input type="text" name="course" value={this.state.course} onChange={this.handleInputChange} placeholder={`${this.state.campus}`}/>
          <button className="btn btn-success m-3">Edit</button>
        </form>
      </div>
    )
  }
}

export default EditProfile
