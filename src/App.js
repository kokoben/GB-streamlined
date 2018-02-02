import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout className = "layout">
          <Header>
            <div className="logo" />
            <Menu 
              theme="dark" 
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px'}}
            >
              <Menu.Item key="1">Quicklooks</Menu.Item>
              <Menu.Item key="2">Features</Menu.Item>
              <Menu.Item key="3">Podcasts</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px'}}>
            <Breadcrumb style={{ margin: '16px 0' }} >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Giant Bomb Streamlined Created by Ben Lee
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
