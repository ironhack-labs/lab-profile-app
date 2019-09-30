import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <div className="left-side home">
          <h1
            style={{
              color: '#638165'
            }}
          >
            IronProfile
          </h1>
          <p
            style={{
              color: '#747678',
              fontSize: '22px',
              marginBottom: '50px'
            }}
          >
            Today we will create an app with authoritation, adding some cool styles!
          </p>
          <div>
            <Link to="/signup">
              <Button
                style={{
                  backgroundColor: '#c0e3be',
                  color: '#638165',
                  margin: '15px',
                  width: '200px',
                  border: 'none',
                  display: 'block'
                }}
              >
                <b>Sign up</b>
              </Button>
            </Link>
            <Link to="Login">
              <Button
                style={{
                  backgroundColor: '#c0e3be',
                  color: '#638165',
                  margin: '15px',
                  width: '200px',
                  border: 'none',
                  display: 'block'
                }}
              >
                <b> Log in</b>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
