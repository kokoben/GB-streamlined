import React from 'react';
import { Layout, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import SearchBar from '../containers/search-bar';

const { Header } = Layout;

const FeedHeader = props => (
  <Header
    style={{
      background: '#282B2D',
      color: '#fff',
      padding: '0',
    }}
  >
    <Row>
      <Col md={{ span: 8 }}>
        <div className="feed-header">Latest {props.category} Episodes</div>
      </Col>
      <Col md={{ span: 8, offset: 8 }}>
        <SearchBar
          placeholder={props.placeholder}
          fetchVideos={props.fetchVideos}
          currentResults={props.currentResults}
          setVideo={props.setVideo}
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
  setVideo: PropTypes.func.isRequired,
};
/* eslint-enable */

export default FeedHeader;
