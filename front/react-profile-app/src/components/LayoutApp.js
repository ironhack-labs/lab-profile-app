import React from 'react'
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const LayoutApp = ({ children }) => {
  return (
    <Layout className="layout">
    <Content style={{ padding: '50px 50px' }}>
      <div className="site-layout-content">
        { children }
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
  )
}

export default LayoutApp 
