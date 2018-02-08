import React from 'react';
import QuicklookVideos from './quicklook-videos';
import CurrentQuicklookVideo from './current-quicklook-video';
import { Row, Col, Pagination } from 'antd';

export default () => (
  <div>
    <CurrentQuicklookVideo />
    <QuicklookVideos />
  </div>
)

