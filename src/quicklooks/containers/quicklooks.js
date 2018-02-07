import React from 'react';
import Videos from '../../containers/videos';
import CurrentVideo from '../../containers/current-video';
import { Row, Col, Pagination } from 'antd';

export default () => (
  <div>
    <CurrentVideo />
    <Videos />
    <Pagination defaultCurrent={1} total={50} />
  </div>
)

