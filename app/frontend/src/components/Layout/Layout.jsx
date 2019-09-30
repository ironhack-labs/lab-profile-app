import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='container-fluid' style={{ backgroundImage: 'linear-gradient(to right, #C1DFC4, #DEECDD)' }}>
      <div className='row' style={{ minHeight: '100vh' }}>
        <div className='col-12 col-md-8 m-auto'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
