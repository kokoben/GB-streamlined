import React from 'react';
import { Layout } from 'antd';
import Header from './header';
import Content from './content';
import Footer from './footer';

const App = () => (
  <div>
    <Layout className="layout">
      <Header className="header" />
      <Content className="content" />
      <Footer cassName="footer" />
    </Layout>
  </div>
);

export default App;
