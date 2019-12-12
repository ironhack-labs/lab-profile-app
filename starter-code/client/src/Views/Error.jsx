import React, { Component } from 'react'

function Error (props) {
  const errorMessageMap = {
    404: 'Page not found',
    401: 'User not authorized',
    500: 'Server error'
  };
    const defaultErrorMessage = 'Unknown error';
    const code = props.match.params.errorCode;
    const message = errorMessageMap[code] || defaultErrorMessage;
    return (
      <div className='m-5 text-center'>
      <h1>😟</h1>
        <h1>There was an error in this page.</h1>
        <h3>The error is {message}. </h3>
      </div>
    )

}

export default Error
