import React, { useContext } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { Context } from '../context';
import { logoutP } from '../services/auth';

const { Header, Content, Footer } = Layout;
const LayoutApp = ({ children }) => {
  const { user, logout } = useContext(Context);

  async function setlogout() {
    await logoutP();
    logout();
  }

  //

  return (
    <Layout
      className="layout"
      style={{
        height: '100vh',
        background: 'linear-gradient(90deg, #C1DFC4 0%,  #DEECDD 100%)',
      }}
    >
      <Header>
        <Menu
          theme="light"
          style={{ width: '100vw', position: 'absolute', right: '0' }}
          mode="horizontal"
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>

          {user ? (
            <></>
          ) : (
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
          )}

          {user ? (
            <></>
          ) : (
            <Menu.Item key="3">
              <Link to="/signup">Signup</Link>
            </Menu.Item>
          )}
          <Menu.Item onClick={setlogout} key="4">
            Logout
          </Menu.Item>
          {!user ? (
            <></>
          ) : (
            <Menu.Item key="5">
              <Link to="/profile">Profile</Link>
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <br />
        <br />
        {children}
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'white',
          color: 'black',
        }}
      >
        ©2020 Adriano, Hugo & Edgar
      </Footer>
    </Layout>
  );
};

export default LayoutApp;
