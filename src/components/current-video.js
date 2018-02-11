import React, { Component } from 'react';
import { Row, Col } from 'antd';

const CurrentVideo = (props) => (
  <div>
    <Row type="flex" justify="center">
      <Col span={4}>
        <p>{props.name}</p>
        <p> Posted by {props.user} | {props.pub_date}</p>
        <p>{props.description}</p>
      </Col>
      <Col span={4}>
        <video src={props.source} poster={props.poster} width="640" height="360" controls>
        Your browser does not support the video tag.
        </video>
      </Col>
    </Row>
  </div>
)

export default CurrentVideo;
