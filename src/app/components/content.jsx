import React from 'react';
import { Layout } from 'antd';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../../home/components/home';
import Quicklooks from '../../quicklooks/components/quicklooks';
import Bombcasts from '../../bombcasts/components/bombcasts';
import Features from '../../features/components/features';
import { XS, SM, MD, LG, XL, XXL } from '../../media-queries';

const Inside = props => (
  <Layout.Content
    style={{
      background: '#fff',
      padding: '10px 10px',
      width: props.width,
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

const Content = () => (
  <div>
    <XS><Inside width="100%" /></XS>
    <SM><Inside width="100%" /></SM>
    <MD><Inside width="740px" /></MD>
    <LG><Inside width="940px" /></LG>
    <XL><Inside width="1160px" /></XL>
    <XXL><Inside width="1160px" /></XXL>
  </div>
);

Inside.propTypes = {
  width: PropTypes.string.isRequired,
};

export default Content;
