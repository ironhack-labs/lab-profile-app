import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthService from './components/AuthService';
import Signup from './components/Signup';
import Loggedin from './components/Loggedin';


class App extends Component {

  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  logout = () => {
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
    })
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  render() {
    this.fetchUser()

    if(this.state.loggedInUser){
      return (
        <div className="App">
        <loggedin></loggedin>

      
          {/* <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Contents></Contents>
          </header> */}
        </div>
      );
    } else {
      return (
        <div className="App">
        <Signup></Signup>
          {/* <header className="App-header">
            <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
            <Switch>
              <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
              <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            </Switch>
          </header> */}
        </div>
      );
    }
  }
}

export default App;

function checking (s, caps) {
  let s1 = s.split("");
  let caps1 = caps.split(""); 
  let res = []
  caps1.forEach((e, idx) => {
    if (idx % 2 == 0)
    {for (let i = 0; i < s1.length; i++) {
      if (idx = s1[i]) {
        res.push(true)
        break
      }
    }
  }  
    else if (idx % 2 != 0) 
    { let s2 = s1.reverse();
     {for (let i = 0; i < s2.length; i++) {
      if (idx = s2[i]) {
        res.push(false)
        break;
      }
    }
  }}
    
 })
console.log(s1)
console.log(caps1)

 return res[res.length -1]
}

checking("(Sensei [says) no!]", "()[]")