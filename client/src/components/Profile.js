import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   this.getSingleProject();
  // }

  // getSingleProject = () => {
  //   const { params } = this.props.match;
  //   axios
  //     .get(`http://localhost:5000/api/projects/${params.id}`, {
  //       withCredentials: true
  //     })
  //     .then(responseFromApi => {
  //       const theProject = responseFromApi.data;
  //       this.setState(theProject);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // renderEditForm = () => {
  //   if (!this.state.title) {
  //     this.getSingleProject();
  //   } else {
  //     //                                                    {...props} => so we can have 'this.props.history' in Edit.js
  //     //                                                                                          ^
  //     //                                                                                          |
  //     return (
  //       <EditProject
  //         theProject={this.state}
  //         getTheProject={this.getSingleProject}
  //         {...this.props}
  //       />
  //     );
  //   }
  // };

  render() {
    return <div></div>;
  }
}

export default Profile;
