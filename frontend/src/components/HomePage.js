import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Button } from 'antd'

function HomePage() {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '200px'
      }}>
      <Card
        style={{
          //   ,
          width: '65%',
          textAlign: 'center'
        }}>
        <>
          <h1 style={{ color: '#638165', marginTop: '30px' }}>IronProfile</h1>{' '}
          <p>Today we will create an app with authorization, adding some cool styles</p>
          <article style={{ margin: '25px 0 0 0' }}>
            <NavLink exact to="signup">
              <Button
                style={{
                  background: '#c0e3be',
                  border: 'none',
                  color: 'c0e3be',
                  margin: '20px 0 20px 0'
                }}>
                Sign up
              </Button>
            </NavLink>
            <br />
            <NavLink exact to="login">
              <Button
                style={{
                  background: '#c0e3be',
                  border: 'none',
                  color: 'c0e3be',
                  margin: '20px 0 20px 0'
                }}>
                Login
              </Button>
            </NavLink>
          </article>
        </>
      </Card>
    </section>
  )
}

export default HomePage
