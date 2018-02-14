import React from 'react';
import { Layout } from 'antd';
import Header from '../components/header';
import Content from '../components/content';
import Footer from '../components/footer';
import { Button } from 'antd';

const App = () => {
  return (
    <div>
      <Layout className = "layout">
        <Header />
        <Content />
        <Footer />
      </Layout>
    </div>
  )
}

export default App;
