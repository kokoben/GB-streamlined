import React, { Component } from 'react';
import '../style/App.css';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from '../../home/containers/home';
import Quicklooks from '../../quicklooks/containers/quicklooks';
import Podcasts from '../../podcasts/containers/podcasts';
import Features from '../../features/containers/features';
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  // get current location to set default selected menu key
  let href = window.location.href.split('/');
  href = href[3];
  console.log(href);

  return (
    <div>
      <Layout className = "layout">
        <Header>
          <div className="logo" />
          <Menu 
            theme="dark" 
            mode="horizontal"
            defaultSelectedKeys={["/" + href]}
            style={{ lineHeight: '64px'}}
          >
            <Menu.Item key="/">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="/quicklooks">
              <Link to="/quicklooks">Quicklooks</Link>
            </Menu.Item>
            <Menu.Item key="/features">
              <Link to="/features">Features</Link>
            </Menu.Item>
            <Menu.Item key="/podcasts">
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
            <Route exact path="/" component={Home} />
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
}

export default App;
