import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';

const CurrentVideo = props => (
  <div style={{ margin: '0 auto', width: '80%' }}>
    <Row type="flex" justify="center">
      <Col span={8}>
        <p>{props.name}</p>
        <p> Posted by {props.user} | {props.pub_date}</p>
        <p>{props.deck}</p>
      </Col>
      <Col span={16}>
        <iframe
          allowFullScreen
          title="Current Video"
          src={props.embed_player}
          width="640"
          height="360"
        />
      </Col>
    </Row>
  </div>
);

CurrentVideo.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pub_date: PropTypes.string.isRequired,
  deck: PropTypes.string.isRequired,
  embed_player: PropTypes.string.isRequired,
};

export default CurrentVideo;
