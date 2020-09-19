import React, { useContext } from 'react'
import { Layout, Menu } from 'antd';
import {Context} from "../context"
import {Link} from 'react-router-dom'
import {logoutProcess} from "../services/auth"
import {Redirect} from "react-router-dom"

const { Header, Content, Footer } = Layout;

function LayoutApp(props) {

    const {user,logout} = useContext(Context)

    async function logoutP(){
        await logoutProcess()
        logout()
    }

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[0]}>
                <Menu.Item key="1"><Link to='/'>Home</Link></Menu.Item>
                {!user && (
                <Menu.Item key="2"><Link to='/signup'>Sign Up</Link></Menu.Item>)}
                {!user && (
                <Menu.Item key="3"><Link  to='/login'>Log In</Link></Menu.Item>)}
                {user && (
                <Menu.Item key="4"><Link  to='/profile'>Profile</Link></Menu.Item>)}
                {user && (
                <Menu.Item key="5" onClick={logoutP}>Logout</Menu.Item>)}
            </Menu>
            </Header>
            <Content style={{ padding: '0 50px', height: "100vh"}}>
                <div className="site-layout-content">{ props.children }</div>
            </Content>
        
      </Layout>
    )
}

export default LayoutApp
