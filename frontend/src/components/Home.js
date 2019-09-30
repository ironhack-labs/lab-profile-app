import React from 'react'

import {Link} from 'react-router-dom'
import { Card } from 'antd';

export default function Home (props) {
  return(
    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width:'100vw', height: '100vh' }}>

    
    <Card title="IronProfile" style={{ width: 500, height: 700}}>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection: 'column', margin: '15% 0'}}>
    <p>Authentication with React... Check!</p>
    <Link to="/auth/signup"><button
            
            style={{
              backgroundColor: '#c0e3be',
              color: '#638165',
              margin: '15px',
              width: '200px',
              border: 'none',
              display: 'block'
            }}
          >
            Signup
          </button></Link>
    <Link to="/auth/login"><button
            style={{
              backgroundColor: '#c0e3be',
              color: '#638165',
              margin: '15px',
              width: '200px',
              border: 'none',
              display: 'block'
            }}
          >
            Login
          </button></Link>
    </div>
  </Card>
  

    </div>
  )
}