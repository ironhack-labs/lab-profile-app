import React from 'react'
import {Layout, Card} from 'antd'
const {Header, Content, Footer}=Layout

function LayoutApp({children}) {
    return (
        <Layout className="layout">
    <Content style={{ margin: '5%', padding:"10px 40px", borderStyle:"solid", height:"30rem" }}>
      <div className="site-layout-content">{children}</div>
    </Content>
  </Layout>
    )
}

export default LayoutApp
