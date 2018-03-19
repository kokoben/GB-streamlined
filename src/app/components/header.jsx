import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { slide as Slide } from 'react-burger-menu';
import Logo from '../../images/logo.png';


// get current location to set default selected menu key
// eslint-disable-next-line no-undef
let href = window.location.href.split('/');
href = href[3];

/* eslint-disable jsx-a11y/anchor-is-valid */
const FullMenu = () => (
  <Layout.Header
    className="menu-full-header"
    style={{
      borderBottomWidth: '2px',
      borderBottomColor: '#981616',
      borderBottomStyle: 'solid',
    }}
  >
    <Layout.Header className="menu-full" style={{ margin: '0 auto' }}>
      <img src={Logo} alt="GB-Streamlined" className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[`/${href}`]}
        style={{
          lineHeight: '62px',
          borderBottomWidth: '2px',
          borderBottomColor: '#981616',
          borderBottomStyle: 'solid',
        }}
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
    </Layout.Header>
  </Layout.Header>
);
/* eslint-enable */

class Burger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    };

    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  handleStateChange(state) {
    this.setState({
      menuOpen: state.isOpen,
    });
  }

  closeMenu() {
    this.setState({
      menuOpen: false,
    });
  }

  /* eslint-disable jsx-a11y/anchor-is-valid */
  render() {
    return (
      <Slide
        noOverlay
        isOpen={this.state.menuOpen}
        onStateChange={this.handleStateChange}
      >
        <Link to="/" onClick={this.closeMenu}>Home</Link>
        <Link to="/quicklooks" onClick={this.closeMenu}>Quick Looks</Link>
        <Link to="/features" onClick={this.closeMenu}>Features</Link>
        <Link to="/bombcasts" onClick={this.closeMenu}>Bombcasts</Link>
      </Slide>
    );
  }
  /* eslint-enable */
}
const BurgerMenu = () => (
  <Layout.Header className="menu-mini-header">
    <Layout.Header className="menu-mini" style={{ margin: '0 auto' }}>
      <Burger />
      <img src={Logo} alt="GB-Streamlined" className="logo-right" />
    </Layout.Header>
  </Layout.Header>
);

const Header = () => (
  <div>
    <BurgerMenu />
    <FullMenu />
  </div>
);

export default Header;
