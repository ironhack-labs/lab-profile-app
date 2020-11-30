import React from 'react'
import { logoutFn } from '../services/auth'
import { useContextInfo } from '../hooks/context'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';

const { Header, Footer, Content,Breadcrumb } = Layout;

const LayoutApp = ({ children }) => {
    const { user, logout } = useContextInfo()
  
    async function handleLogout() {
      await logoutFn()
      logout()
    }

    return(
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        {!user ? <>
        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item> </> :<React.Fragment>
        <Menu.Item key="3"><Link to="/signup">Signup</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/profile">Profile</Link></Menu.Item>
        <Menu.Item key="5" onClick={handleLogout}><Link to="/profile">Logout</Link></Menu.Item></React.Fragment>}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Login</Breadcrumb.Item>
        <Breadcrumb.Item>Sign-Up</Breadcrumb.Item>
        <Breadcrumb.Item>Profile</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">{children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);
        }

export default LayoutApp