import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';

export class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='auth-form'>
                    <h1>IronProfile</h1>
                    <p>Today we will create an app with authorisation adding some cool styles!</p>
                    <Button variant='success' href='/signup'>Sign Up</Button>{' '}
                    <Button variant='success' href='/login'>Log In</Button>{' '}
                </div>
                <div className='info'></div>
            </div>
        )
    }
}

export default Home
