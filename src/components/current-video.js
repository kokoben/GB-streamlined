import React, { Component } from 'react';
import { Row, Col } from 'antd';

const CurrentVideo = props => (
  <div>
    <Row type="flex" justify="center">
      <Col span={4}>
        <p>{props.name}</p>
        <p> Posted by {props.user} | {props.pub_date}</p>
        <p>{props.deck}</p>
      </Col>
      <Col span={4}>
        <iframe src={props.embed_player} width="640" height="360">
        </iframe>
      </Col>
    </Row>
  </div>
)

export default CurrentVideo;
