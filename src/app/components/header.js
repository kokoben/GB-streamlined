import React from 'react';
import { Layout, Menu } from 'antd';
import { Route, Link } from 'react-router-dom';
import Quicklooks from '../../quicklooks/containers/quicklooks';
import Podcasts from '../../podcasts/containers/podcasts';
import Features from '../../features/containers/features';

// get current location to set default selected menu key
let href = window.location.href.split('/');
href = href[3];
console.log(href);

const Header = () => (
    <Layout.Header>
      <div classname="logo" />
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
    </Layout.Header>
)

export default Header;
