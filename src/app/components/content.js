import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Home from '../../home/containers/home';
import Quicklooks from '../../quicklooks/containers/quicklooks';
import Podcasts from '../../podcasts/containers/podcasts';
import Features from '../../features/containers/features';
import { Route } from 'react-router-dom';

const Content = () => (
  <Layout.Content style={{ padding: '0 50px'}}>
    <Breadcrumb style={{ margin: '16px 0' }} >
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
      <main style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Route exact path="/" component={Home} />
        <Route exact path="/quicklooks" component={Quicklooks} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/podcasts" component={Podcasts} />
      </main>
  </Layout.Content>

)

export default Content;
