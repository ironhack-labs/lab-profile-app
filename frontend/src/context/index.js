import React, {Component, createContext} from 'react';
import AUTH_SERVICE from '../services/auth';

export const MyContext = createContext();

class MyProvider extends Component{
  state ={
    user:{}
  };

  handleInput = (e) => {
    const { user } = this.state
    const key = e.target.name
    user[key] = e.target.value
    this.setState({user})
  };

  onSubmit = (e) => {
    e.preventDefault();
    AUTH_SERVICE.login(this.state.user)
      .then((response) => {
        this.context.logUser(response.data.user)
        this.props.history.push('/')
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default MyProvider;