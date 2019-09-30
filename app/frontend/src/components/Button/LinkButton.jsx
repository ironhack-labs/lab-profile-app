import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ name, to }) => {
  return (
    <Link to={to} className='btn btn-block btn-lg' style={{ background: '#c0e3be', border: 'none' }}>
      {name}
    </Link>
  )
}

export default LinkButton
