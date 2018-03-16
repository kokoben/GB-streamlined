import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'moment';

const CurrentVideo = (props) => {
  const pubDateFormatted = Moment(props.pub_date).format('MMM. D, YYYY h:mma');

  return (
    <div style={{ background: '#000', margin: '0 auto', width: '100%' }}>
      <Row type="flex" justify="center">
        <Col span={8}>
          <div style={{ padding: '16px', color: '#fff' }}>
            <p>{props.name}</p>
            <p><i> Posted by {props.user} | {pubDateFormatted}</i></p>
            <p>{props.deck}</p>
          </div>
        </Col>
        <Col span={16} >
          <div className="intrinsic-container intrinsic-container-16x9">
            <iframe
              allowFullScreen
              title="Current Video"
              src={props.embed_player}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

CurrentVideo.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pub_date: PropTypes.string.isRequired,
  deck: PropTypes.string.isRequired,
  embed_player: PropTypes.string.isRequired,
};

export default CurrentVideo;
