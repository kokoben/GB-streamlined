import React from 'react';
import { Layout, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import SearchBar from '../containers/search-bar';

const { Header } = Layout;

const FeedHeader = props => (
  <Header
    style={{
      background: '#fff',
      margin: '0 auto',
      padding: '0',
    }}
  >
    <Row>
      <Col span={8}>
        Latest {props.category} Episodes
      </Col>
      <Col span={6} offset={10}>
        <SearchBar
          placeholder={props.placeholder}
          fetchVideos={props.fetchVideos}
          currentResults={props.currentResults}
        />
      </Col>
    </Row>
  </Header>
);

/* eslint-disable react/forbid-prop-types */
FeedHeader.propTypes = {
  category: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  fetchVideos: PropTypes.func.isRequired,
  currentResults: PropTypes.array.isRequired,
};
/* eslint-enable */

export default FeedHeader;
