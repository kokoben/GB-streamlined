import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Header } = Layout;

const FeedHeader = props => (
  <Header
    style={{
      background: '#f0f2f5',
      width: '80%',
      margin: '0 auto',
    }}
  >
    Latest {props.category} Episodes
  </Header>
);

FeedHeader.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FeedHeader;
