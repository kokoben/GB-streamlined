import React, { Component } from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'moment';

class CurrentVideo extends Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const pubDateFormatted = Moment(this.props.pub_date).format('MMM. D, YYYY h:mma');

    return (
      <div style={{ background: '#000', margin: '0 auto', width: '100%' }}>
        <Row type="flex" justify="center">
          <Col xs={24} lg={8}>
            <div style={{ padding: '16px', color: '#fff' }}>
              <h2 style={{ color: '#fff' }}>{this.props.name}</h2>
              <p><i> Posted by {this.props.user} | {pubDateFormatted}</i></p>
              <p>{this.props.deck}</p>
            </div>
          </Col>
          <Col xs={24} lg={16} >
            <div className="intrinsic-container intrinsic-container-16x9">
              <iframe
                frameBorder={0}
                allowFullScreen
                title={this.props.name}
                name={this.props.name}
                src={this.props.embed_player}
              />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

CurrentVideo.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  pub_date: PropTypes.string.isRequired,
  deck: PropTypes.string.isRequired,
  embed_player: PropTypes.string.isRequired,
};

export default CurrentVideo;
