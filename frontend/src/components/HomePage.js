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
            <Card title="Auth Page" style={{
                width: '80vw',
                height: '80vh',
                backgroundImage: 'url(../oval-bg.png)',
                backgroundSize: 'cover'
            }}>
                <Link to="/signup">
                    <Button type="primary">Sign up</Button>
                </Link>
                <Link to='/login'>
                    <Button>Log in</Button>
                </Link>
            </Card>
        </div>
    )
}
