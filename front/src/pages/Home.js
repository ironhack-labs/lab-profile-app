import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Row, Col, Button } from 'antd'

const Home = () => {
    return (
        <Row style={{position: "relative", top: "200px", padding: "30px"}}>
            <Col offset={6} span={5}>
                <Typography.Title level={1} style={{color: '#638165'}}>IronProfile</Typography.Title>
                <Typography.Title level={3} style={{color: '#638165'}}>Today we will create an app with authoritation, adding some cool styles!</Typography.Title>
                <Link to="/signup"><Button style={{background: '#C1DFC4', borderColor: '#C1DFC4', color: 'black', width: '60%', margin: "100px 50px 50px 50px"}} type="primary" block>Sign up</Button></Link>
                <br />
                <br />
                <Link to="/login"><Button style={{background: '#C1DFC4', borderColor: '#C1DFC4', color: 'black', width: '60%', margin: "0 50px"}} type="primary" block>Log in</Button></Link>
            </Col>
        </Row>
    )
}

export default Home
