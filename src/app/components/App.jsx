import React from 'react';
import { Layout } from 'antd';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';

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
