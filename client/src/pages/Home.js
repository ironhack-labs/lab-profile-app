import React from 'react'
import { Link } from "react-router-dom"
import { Button } from "antd";
import { Typography } from 'antd';
const { Title } = Typography;

function Home() {
    return ( 
	<div className = "card" style={{backgroundColor: '#DEECDD'}}>
        <div className = "white flex">
			<div>
				<Title style={{color: '#638165'}} > IronProfile </Title>
				<Title level={3}> Today we will create an app with authoritation, adding some cool styles! </Title>
			</div>
			<div>
			<Button style={{backgroundColor: '#638165', color: "white", border: "none", width:'150px', margin:'20px'}} block type = 'primary'>
			<Link to = "./signup" > Sign up </Link>
			</Button>
			<Button style={{backgroundColor: '#638165', color: "white", border: "none", width:'150px', margin:'20px'}} block type = 'primary' >
			<Link to = "./login"> Login </Link> 
			</Button>
			</div>
		</div>
		<div className = "green" >

        </div> 
		</div>
    )
}

export default Home