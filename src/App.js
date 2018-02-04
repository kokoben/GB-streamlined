import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Quicklooks from './containers/quicklooks';
import Podcasts from './containers/podcasts';
import Features from './containers/features';
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
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
          <Menu.Item key="1">
            <Link to="/quicklooks">Quicklooks</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/features">Features</Link>
          </Menu.Item>
          <Menu.Item key="3">
          <Link to="/podcasts">Podcasts</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px'}}>
        <Breadcrumb style={{ margin: '16px 0' }} >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <main style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Route exact path="/" component={Quicklooks} />
          <Route exact path="/quicklooks" component={Quicklooks} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/podcasts" component={Podcasts} />
        </main>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Giant Bomb Streamlined Created by Ben Lee
      </Footer>
    </Layout>
  </div>
)

export default App;
