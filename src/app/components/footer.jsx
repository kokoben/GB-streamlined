import React from 'react';
import { Layout } from 'antd';

const Footer = () => (
  <Layout.Footer
    style={{
      color: '#fff',
      textAlign: 'center',
      padding: '0',
      marginBottom: '45px',
    }}
  >
    <p style={{ margin: '0 auto' }}>Giant Bomb Streamlined Created by Ben Lee</p>
    <p style={{ margin: '0 auto' }}>
      Created using the <a href="https://www.giantbomb.com">Giant Bomb</a> API
    </p>
  </Layout.Footer>
);

export default Footer;
