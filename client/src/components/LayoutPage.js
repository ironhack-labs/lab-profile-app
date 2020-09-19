import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Card, Button } from 'antd'


const { Content } = Layout;

const LayoutPage = ({ children }) => {
    return (<div>

        <Layout style={{
            background: "rgb(207, 229, 208)", height: "100vh", display: "flex", justifyContent: 'center', alignItems: 'center'
        }}>

            <Content style={{
                height: "60vh", background: `url("https://raw.githubusercontent.com/ironhack-labs/lab-profile-app/master/assets/oval-bg.png") no-repeat center`, backgroundSize: 'cover', display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: 40
            }} >

                {children}
            </Content>

        </Layout>

    </div>

    )
}

export default LayoutPage