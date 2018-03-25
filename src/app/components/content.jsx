import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import HomeConnected from '../../home/containers/home';
import QuicklooksConnected from '../../quicklooks/containers/quicklooks';
import BombcastsConnected from '../../bombcasts/containers/bombcasts';
import FeaturesConnected from '../../features/containers/features';

const Content = () => (
  <Layout.Content
    className="content"
    style={{
      background: '#fff',
      padding: '10px 10px',
      margin: '0 auto 50px',
      borderBottomWidth: '2px',
      borderBottomColor: '#981616',
      borderBottomStyle: 'solid',
    }}
  >
    <main>
      <Switch>
        <Route exact path="/" component={HomeConnected} />
        <Route exact path="/quicklooks/" component={QuicklooksConnected} />
        <Route exact path="/features" component={FeaturesConnected} />
        <Route exact path="/bombcasts" component={BombcastsConnected} />
      </Switch>
    </main>
  </Layout.Content>
);

export default Content;
