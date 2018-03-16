import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { slide as Slide } from 'react-burger-menu';
import PropTypes from 'prop-types';
import { XS, SM, MD, LG, XL, XXL } from '../../media-queries';

// get current location to set default selected menu key
// eslint-disable-next-line no-undef
let href = window.location.href.split('/');
href = href[3];

/* eslint-disable jsx-a11y/anchor-is-valid */
const FullMenu = props => (
  <Layout.Header>
    <Layout.Header style={{ width: props.width, margin: '0 auto' }}>
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
const BurgerMenu = props => (
  <Layout.Header>
    <Layout.Header style={{ width: props.width, margin: '0 auto' }}>
      <Burger />
      <div className="logo-right" />
    </Layout.Header>
  </Layout.Header>
);

const Header = () => (
  <div>
    <XS><BurgerMenu width="100%" /></XS>
    <SM><BurgerMenu width="100%" /></SM>
    <MD><FullMenu width="740px" /></MD>
    <LG><FullMenu width="740px" /></LG>
    <XL><FullMenu width="940px" /></XL>
    <XXL><FullMenu width="1160px" /></XXL>
  </div>
);

FullMenu.propTypes = {
  width: PropTypes.string.isRequired,
};

BurgerMenu.propTypes = {
  width: PropTypes.string.isRequired,
};

export default Header;
