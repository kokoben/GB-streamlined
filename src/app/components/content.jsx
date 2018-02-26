import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import Home from '../../home/components/home';
import Quicklooks from '../../quicklooks/components/quicklooks';
import Bombcasts from '../../bombcasts/components/bombcasts';
import Features from '../../features/components/features';
import FeedHeader from '../../components/feed-header';

const Content = () => (
  <Layout>
    <Route exact path="/" render={() => <FeedHeader category="" />} />
    <Route path="/quicklooks" render={() => <FeedHeader category="Quick Look" />} />
    <Route path="/features" render={() => <FeedHeader category="Feature" />} />
    <Route path="/bombcasts" render={() => <FeedHeader category="Bombcast" />} />
    <Layout.Content
      style={{
        background: '#fff',
        padding: '50px 50px',
        width: '80%',
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
  </Layout>
);

export default Content;
