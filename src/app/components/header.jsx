import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { XS, SM, MD, LG, XL, XXL } from '../../media-queries';

// get current location to set default selected menu key
// eslint-disable-next-line no-undef
let href = window.location.href.split('/');
href = href[3];

const Header = () => (
  <Layout.Header>
    <Layout.Header style={{ width: '60%', margin: '0 auto' }}>
      <Row>
        <Col xs={0} sm={0} md={24} lg={24} xl={24}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[`/${href}`]}
            style={{ lineHeight: '64px' }}
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
        </Col>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>
    </Layout.Header>
  </Layout.Header>
);

export default Header;
