import React from "react";
import { Link } from "react-router-dom";
import { Card, Input, Form, Button } from 'antd';
import { MyContext } from '../context/index';
import AUTH_SERVICE from '../services/auth';



export default class ProfileEdit extends React.Component {
  state = {
    updateUser: {}
  };

  handleInput = (e) => {
    const { updateUser } = this.state;
    const key = e.target.name;
    updateUser[key] = e.target.value;
    this.setState({ updateUser });
    console.log(this.context.state.loggedUser)
  };

  onSubmit = () => {
    const userinfo = this.context.state.loggedUser
   
    let { updateUser } = this.state;
    console.log('el updateeeeeeeeeeeeeeeeeeee', updateUser)
   
    if(userinfo.username !== updateUser.username || userinfo.course !== updateUser.course){
      AUTH_SERVICE.edit({...updateUser})
        .then(res=> console.log(res))
        .catch(e => console.log(e));
    }
    this.props.history.push('/login')
  };


  render() {
 
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
       
        <Card style={{ width: '80vw', height: '70vh',  backgroundImage: 'url("/image/oval-bg.png")', backgroundSize: 'cover'  }}>
        <div style={{}}>
        <p style={{fontSize: '3rem', marginLeft: '2vw'}}>Edit Profile</p>
          <Form onSubmit={this.onSubmit}>
            <Form.Item>
            <label>User Name</label>
            <br></br>
              <Input onChange={this.handleInput} style={{width: '30vw'}} type="text" name="username" placeholder="User name" />
            </Form.Item>
            <Form.Item>
            <label>Password</label>
            <br></br>
              <Input
                style={{width: '30vw'}}
                onChange={this.handleInput}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
            <label>Campus</label>
            <br></br>
              <Input
                style={{width: '30vw'}}
                onChange={this.handleInput}
                type="text"
                name="campus"
                placeholder="Madrid, Barcelona, Miami, Paris, Berlin, Amsterdam, México, Sao Paulo"
              />
            </Form.Item>
            <Form.Item>
            <label>Course</label>
            <br></br>
              <Input
                style={{width: '30vw'}}
                onChange={this.handleInput}
                type="text"
                name="course"
                placeholder="WebDev, UX/UI, Data Analytics"
              />
            </Form.Item>
            <Form.Item>
           <Button style={{width: '20vw'}}  type="button" onClick={this.onSubmit}  value="Confirm">Confirm</Button>
           <br></br><small><b>You have to log in again, with your updated info</b> </small>
            </Form.Item>
            
          </Form>
          </div>
          <div style={{display:'flex', flexDirection:'column', alignContent: 'right', textAlign: 'center', marginLeft: '10vw', justifyContent:'space-between'}}></div>
        </Card>
      </div>
    );
  }
}

ProfileEdit.contextType = MyContext;