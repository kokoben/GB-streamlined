import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import Home from '../../home/components/home';
import Quicklooks from '../../quicklooks/components/quicklooks';
import Bombcasts from '../../bombcasts/components/bombcasts';
import Features from '../../features/components/features';
import { Route } from 'react-router-dom';

const Content = () => (
  <Layout.Content style={{ padding: '0 50px', margin: 'auto'}}>
    <Breadcrumb style={{ margin: '16px 0' }} >
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/quicklooks" component={Quicklooks} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/bombcasts" component={Bombcasts} />
      </main>
  </Layout.Content>
)

export default Content;