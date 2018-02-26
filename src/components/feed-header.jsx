import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Header } = Layout;

const FeedHeader = props => (
  <Header
    style={{
      background: '#fff',
      margin: '0 auto',
      padding: '0',
    }}
  >
    Latest {props.category} Episodes
  </Header>
);

FeedHeader.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FeedHeader;
