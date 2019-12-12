import React, { Component } from 'react'
import {signUp as signUpService} from '../../Services/authentication'


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      campus: '',
      course: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmissionEvent = this.handleSubmissionEvent.bind(this);
  }

  handleInputChange(event) {
    const nameOfState = event.target.name;
    const valueOfInput = event.target.value;
    this.setState({
      [nameOfState]: valueOfInput
    });
  }

  async handleSubmissionEvent(event) {
  event.preventDefault();

  this.setState({
    campus: event.target.campus.value
  });

  //const campus = event.target.campus.value;

  const {username, password, course, campus} = this.state;
  try {
  const user = await signUpService({username, password, campus, course});
  this.props.changeAuthenticationStatus(user);
  this.props.loadUserInformation(); //this is repeating the step above
  this.props.history.push(`/private`);
} catch(error) {
  console.log(error);
  //HERE WE CAN REDIRECT FOR AN ERROR PAGE --> NOT POSSIBLE TO SIGN UP
}

  }

  render() {
    return (
      <div className='text-center border m-5 border-success p-5'>
      <h2 className='mb-3'>Let's Sign Up!</h2>
        <form onSubmit={this.handleSubmissionEvent} className='d-flex flex-column'>
         <label htmlFor="username">Username</label> <input onChange={this.handleInputChange} type="text" className="form-control" name='username' className='' placeholder='Username' value={this.state.username}/>
          <label htmlFor="password">Password</label> <input onChange={this.handleInputChange} type="text" className="form-control" name='password' placeholder='Password' value={this.state.password}/>
          <label htmlFor="campus">Campus</label>
          <select name="campus" id="campus" className="form-control" onChange={this.handleInputChange} defaultValue={""} required>
          <option value="" disabled hidden>Choose here</option>
          <option value="Madrid">Madrid</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Miami">Miami</option>
          <option value="Paris">Paris</option>
          <option value="Berlin">Berlin</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="México">México</option>
          <option value="Sao Paulo">São Paulo</option>
          <option value="Lisbon">Lisbon</option>
          </select>
          <label htmlFor="course">Course</label>
          <select name="course" id="course" className="form-control" onChange={this.handleInputChange} defaultValue={""} required>
          <option value="" disabled hidden>Choose here</option>
          <option value="WebDev">Web Development</option>
          <option value="UX/UI">UX/UI</option>
          <option value="Data Analytics">Data Analytics</option>
          </select>
          <button className="btn btn-success m-3">Sign up</button>
        </form>
      </div>
    );
  };
}

export default Signup

//<input onChange={this.handleInputChange} type="text" name='campus' placeholder='Campus' value={this.state.campus}/>
//<label htmlFor="course">Course</label><input onChange={this.handleInputChange} type="text" className="form-control" name='course' placeholder='Course' value={this.state.course}/>

