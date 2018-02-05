import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Videos extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={6}>Video</Col>
          <Col span={6}>Video</Col>
          <Col span={6}>Video</Col>
          <Col span={6}>Video</Col>
        </Row>
      </div>
    )
  }
}

export default Videos;
