import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'antd'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div style={{paddingTop: '15%', paddingBottom: '15%'}}>
          <Card bordered={false} style={{width: '60%', marginLeft: '20%', height: '50vh', backgroundColor: '#FCBF49'}}>
          <h1 style={{fontSize: '40px', color: '#003049', marginTop: '10%'}}>Home</h1>
          <Button type="dashed" style={{backgroundColor: '#0F8B8D', color: '#EAE2B7'}}><Link to="/signup">Signup</Link></Button><br></br><br></br>
          <Button type="dashed" style={{backgroundColor: '#0F8B8D', color: '#EAE2B7'}}><Link to="/login">Login</Link></Button>
          </Card>
        </div>
      </div>
    )
  }
}

export default Home