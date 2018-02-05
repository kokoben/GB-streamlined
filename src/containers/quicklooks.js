import React from 'react';
import Videos from '../containers/videos';
import Deck from '../containers/deck';
import { Row, Col, Pagination } from 'antd';

export default () => (
  <div>
    <Deck />
    <Videos />
    <Pagination defaultCurrent={1} total={50} />
  </div>
)

