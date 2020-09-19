import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Button, Radio, Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const {Title, Text} = Typography


function Home() {
    return (
        <Card>

        <Title>Welcome to FakeBook</Title>

        <Button value="large"> 
            <Link to="/signup">Sign Up</Link> 
        </Button>
        <Button value="large">
            <Link to="/login">Log In</Link> 
        </Button>
        </Card>
    )
}

export default Home
