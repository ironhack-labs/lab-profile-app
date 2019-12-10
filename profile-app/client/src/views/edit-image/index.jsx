import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  loadUserInformation as loadUserInformation,
  edit as editNoteService,
} from './../../services/authentication';


class EditImageView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }
  
  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const user = await loadUserInformation(id);
      this.setState({
        user
      });
    } catch (error) {
      console.log(error);
    }
  }
  
  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    this.setState({
      // [name]: value
      note: {
        [name]: value
      }
    })
  }
    
   async handleFormSubmission(event) {
      event.preventDefault();
      const user = this.state.user;
      const id = this.props.match.params.id;
      try {
        await editNoteService(id, user);
        this.props.history.push(`/${id}`);
      } catch (error) {
        console.log(error);
      }
    }
    

  render() {
    console.log(this.props)
    return (
    <div>
     <h1>Edit Profile Picture</h1>
     <form onSubmit={this.handleFormSubmission}>
            <input
              type="file"
              value={this.state.user.image || ''}
              name="image"
              onChange={this.handleInputChange}
            />
            <button>Edit</button>
          </form>
      </div>
    );
  }
}


export default EditImageView;