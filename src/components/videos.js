import React from 'react';
import { Pagination } from 'antd';

const Videos = () => (
  <div>
    Videos
    <Pagination defaultCurrent={1} total={50} />
  </div>
)

export default Videos;
