import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
let url = "http://localhost:3000/edit";
const serviceUpload = axios.create({ url, withCredentials: true });

export default class ProfileEdit extends React.Component {
  state = {
    // user: this.props.user,
    updateUser: {}
  };




  handleChange = e => {
    let { updateUser } = this.state;
    console.log(e.target.files);
    if (e.target.files) updateUser.profilePic = e.target.files[0];
    else updateUser[e.target.name] = e.target.value;
    this.setState({ updateUser });
    console.log(this.props.user);
    console.log("Change to")
    console.log(this.state.updateUser);
  };

  submit = () => {
    let { user } = this.props;
    let { updateUser } = this.state;
    console.log(updateUser)
    if (updateUser.profilePic) {
    this.uploadImage(updateUser.profilePic, url)
      .then(res => {
        
        console.log(res)
      })
      .catch(e => console.log(e));
    }
    if(user.username !== updateUser.username || user.email !== updateUser.email){
      axios.post(url, {...updateUser}, { withCredentials: true })
        .then(res=> console.log(res))
        .catch(e => console.log(e));
    }
    this.props.history.push('/profile')
  };

  uploadImage = (file, url) => {
    let formData = new FormData();
    formData.append("profilePic", file);
    return serviceUpload
      .post(url, formData, {
        headers: { enctype: "multipart/form-data" }
      })
      .then(res => res.data)
      .catch(e => e);
  };

  render() {
    let { user, /* updateUser */ } = this.props;
    // if(!updatedUser) return <div>Hey</div>
    // if (updateUser) user.profilePic = updateUser.profilePic;
    return (
      <div>
        <img src={user.profilePic} alt="profilepic" height="250" />
        <input name="profilePic" type="file" onChange={this.handleChange} />
        <h3>
          Username :{" "}
          <input
            name="username"
            type="text"
            placeholder={user.username}
            onChange={this.handleChange}
          />
        </h3>
        <p>
          Email:{" "} 
           <input
            name="email"
            type="text"
            placeholder={user.email}
            onChange={this.handleChange}
          />
        </p>
        <Link to="/profile">
          <button>Cancel</button>
        </Link>
        <button onClick={this.submit}>Save Changes</button>
      </div>
    );
  }
}
