import React from 'react';
import { Layout, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import SearchBar from '../containers/search-bar';
import { XS, SM, MD, LG, XL, XXL } from '../media-queries';

const { Header } = Layout;

const FeedHeader = props => (
  <Header
    style={{
      background: '#282B2D',
      color: '#fff',
      margin: '25px auto',
      padding: '0',
    }}
  >
    <Row>
      <Col md={{ span: 8 }}>
        <XS>
          <div style={{ textAlign: 'center' }}>Latest {props.category} Episodes</div>
        </XS>
        <SM>
          <div style={{ textAlign: 'center' }}>Latest {props.category} Episodes</div>
        </SM>
        <MD>
          <span style={{ paddingLeft: '10px' }}>Latest {props.category} Episodes</span>
        </MD>
        <LG>
          <span style={{ paddingLeft: '10px' }}>Latest {props.category} Episodes</span>
        </LG>
        <XL>
          <span style={{ paddingLeft: '10px' }}>Latest {props.category} Episodes</span>
        </XL>
        <XXL>
          <span style={{ paddingLeft: '10px' }}>Latest {props.category} Episodes</span>
        </XXL>
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
