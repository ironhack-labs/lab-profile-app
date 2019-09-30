import React from 'react'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import LinkButton from '../components/Button/LinkButton'

const NotFound = () => {
  return (
    <Layout>
      <Card>
        <div className='col-12 col-md-5 py-5'>
          <header className='mb-4'>
            <h1 className='h2'>
              <span role='img' aria-label='scared face'>
                😵
              </span>{' '}
              Not Found
            </h1>
            <p>The route you were looking for doesn't exist.</p>
          </header>
          <LinkButton name='Go home' to='/' />
        </div>
      </Card>
    </Layout>
  )
}

export default NotFound
