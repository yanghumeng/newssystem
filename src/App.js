import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Bread from './components/Bread'

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Header/>
      <Layout id="sider">
        <Sidebar>Sider</Sidebar>
        <Content>
          <div className="content">
            <Bread/>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
      <footer>Footer</footer>
    </Layout>
  );
}

export default App;
