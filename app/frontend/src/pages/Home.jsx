import React from 'react'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import LinkButton from '../components/Button/LinkButton'

const Home = () => {
  return (
    <Layout>
      <Card>
        <div className='col-12 col-md-5 my-4'>
          <header className='mb-5 pb-5'>
            <h1 className='h2 mb-3' style={{ color: '#638165' }}>
              IronProfile
            </h1>
            <p className='h4 font-weight-light text-muted'>
              Today we will create an app with authorization adding some cool styles!
            </p>
          </header>
          <LinkButton name='Sign up' to='/signup' />
          <LinkButton name='Log in' to='/login' />
        </div>
      </Card>
    </Layout>
  )
}

export default Home
