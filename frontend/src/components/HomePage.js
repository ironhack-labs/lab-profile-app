import React from 'react'
import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '100vw',
                height: '100vh',
                backgroundColor: '#e5fbed'
            }}>
            <Card title="Iron Profile" style={{
                width: '80vw',
                height: '80vh',
                backgroundImage: 'url(../oval-bg.png)',
                backgroundSize: 'cover',
                color: '#e5fbed'
            }}>
                <h3 style={{ width: '40vw' }}>Today we will create an app with authentication, adding some cool styles!</h3>
                <Link to="/auth/signup">
                    <Button type="primary">Sign up</Button>
                </Link>
                <Link to='/auth/login'>
                    <Button>Log in</Button>
                </Link>
            </Card>
        </div>
    )
}
