import React, {useState, useEffect} from 'react'
import {Typography, Button, Row, Col} from 'antd'
import {Link} from 'react-router-dom'
const {Title, Text}=Typography

function Home() {
    return (
        <div>
            <Row>
                <Col span={12}>
                <Title level={1}>IronProfile</Title>
            <br/>
            <Title level={3}>Today we will create an app with authorization, adding some cool styles!</Title>
                </Col>
                <Col span={12}>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col span={12}>
                    <Link to={'/signup'}><Button type="primary">SingUp</Button>
                    </Link>
                    <br/>
                    <br/>
                    <Link to={'/auth/login'}>
                    <Button type="primary">Login</Button>
                    </Link>
                </Col>
                
            </Row>
            
        </div>
    )
}

export default Home
