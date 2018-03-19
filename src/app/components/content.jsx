import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import Home from '../../home/containers/home';
import Quicklooks from '../../quicklooks/containers/quicklooks';
import Bombcasts from '../../bombcasts/containers/bombcasts';
import Features from '../../features/containers/features';

const Content = () => (
  <Layout.Content
    className="content"
    style={{
      background: '#fff',
      padding: '10px 10px',
      margin: '0 auto 50px',
    }}
  >
    <main>
      <Route exact path="/" component={Home} />
      <Route path="/quicklooks" component={Quicklooks} />
      <Route path="/features" component={Features} />
      <Route path="/bombcasts" component={Bombcasts} />
    </main>
  </Layout.Content>
);

export default Content;
