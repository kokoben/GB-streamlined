import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { XS, SM, MD, LG, XL, XXL } from '../media-queries';

const Mini = props => (
  <div style={{ background: '#000' }}>
    <div style={{ padding: '16px', color: '#fff' }}>
      <h2 style={{ color: '#fff' }}>{props.name}</h2>
      <p><i> Posted by {props.user} | {props.pub_date_formatted}</i></p>
      <p>{props.deck}</p>
    </div>
    <div className="intrinsic-container intrinsic-container-16x9">
      <iframe
        frameBorder={0}
        allowFullScreen
        title={props.name}
        src={props.embed_player}
      />
    </div>
  </div>
);

const Full = props => (
  <div style={{ background: '#000', margin: '0 auto', width: '100%' }}>
    <Row type="flex" justify="center">
      <Col span={8}>
        <div style={{ padding: '16px', color: '#fff' }}>
          <h2 style={{ color: '#fff' }}>{props.name}</h2>
          <p><i> Posted by {props.user} | {props.pub_date_formatted}</i></p>
          <p>{props.deck}</p>
        </div>
      </Col>
      <Col span={16} >
        <div className="intrinsic-container intrinsic-container-16x9">
          <iframe
            frameBorder={0}
            allowFullScreen
            title={props.name}
            src={props.embed_player}
          />
        </div>
      </Col>
    </Row>
  </div>
);

const CurrentVideo = (props) => {
  const pubDateFormatted = Moment(props.pub_date).format('MMM. D, YYYY h:mma');

  return (
    <div>
      <XS><Mini {...props} pub_date_formatted={pubDateFormatted} /></XS>
      <SM><Mini {...props} pub_date_formatted={pubDateFormatted} /></SM>
      <MD><Mini {...props} pub_date_formatted={pubDateFormatted} /></MD>
      <LG><Full {...props} pub_date_formatted={pubDateFormatted} /></LG>
      <XL><Full {...props} pub_date_formatted={pubDateFormatted} /></XL>
      <XXL><Full {...props} pub_date_formatted={pubDateFormatted} /></XXL>
    </div>
  );
};

Mini.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pub_date_formatted: PropTypes.string.isRequired,
  deck: PropTypes.string.isRequired,
  embed_player: PropTypes.string.isRequired,
};

Full.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pub_date_formatted: PropTypes.string.isRequired,
  deck: PropTypes.string.isRequired,
  embed_player: PropTypes.string.isRequired,
};

CurrentVideo.propTypes = {
  pub_date: PropTypes.string.isRequired,
};

export default CurrentVideo;
