import React from 'react'
import AUTH_SERVICE from '../services/auth'



export default class Profile extends React.Component {
  state = {
    user: {}
  }



  componentDidMount() { 
      if (!this.state.user) {
        this.props.history.push('/auth/login');
        console.log(this.state)
        
    }else {
      this.getData()
    }
  }

  getData = async (e) => {
     await AUTH_SERVICE.loggedin(this.state)
      .then((response) => {
        this.setState({user: response.data.user});
      })
      .catch((error) => {
        console.log('error');
      });
  };

  logout = async (e) => {
    await AUTH_SERVICE.logOut()
    this.props.history.push('/auth/login')
  }


  render()  {
  


  

    
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
          <h1
            style={{
              color: '#638165'
            }}
          >
            Profile
          </h1>
          <h2>Hello {this.state.user.username} </h2>
          <p>
            Your campus is: <b>{this.state.user.campus}</b>
          </p>
          <p>
            Your course is: <b>{this.state.user.course}</b>
          </p>
          <button
            onClick={this.logout}
            style={{
              backgroundColor: '#c0e3be',
              color: '#638165',
              margin: '15px',
              width: '200px',
              border: 'none',
              display: 'block'
            }}
          >
            Log out
          </button>
      </div>
    );
  }
}


