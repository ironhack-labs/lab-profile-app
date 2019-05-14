import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>IronProfile</h1>
          <p>Today we will create an app <br/> with authoritation, adding <br/> some cool styles!</p>
          <Button type="primary" htmlType="submit"><Link to='/signup'>Signup</Link></Button>
          <Button type="primary" htmlType="submit"><Link to='/login'>Login</Link></Button>
        </div>
      </>
    )
  }
}

export default Home