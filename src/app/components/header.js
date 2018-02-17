import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

// get current location to set default selected menu key
let href = window.location.href.split('/');
href = href[3];

const Header = () => (
    <Layout.Header>
      <Row type="flex" justify="center">
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
              <Link to="/quicklooks">Quick Looks</Link>
            </Menu.Item>
            <Menu.Item key="/features">
              <Link to="/features">Features</Link>
            </Menu.Item>
            <Menu.Item key="/bombcasts">
            <Link to="/bombcasts">Bombcasts</Link>
            </Menu.Item>
          </Menu>
      </Row>
    </Layout.Header>
)

export default Header;
