import React from 'react';
import { Row, Col, Card } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;

const VideoRow = props => (
  <Row gutter={16}>
    {/* build each video in the row */}
    {props.videos.map(video => (
      <Col span={6} key={video.id}>
        <Card
          onClick={() => props.onCardClick(video.id)}
          key={video.id}
          bordered={false}
          hoverable
          cover={<img alt={video.image.name} src={video.image.super_url} />}
        >
          <Meta
            title={video.name}
            description={
              <div>
                <p>Posted by {video.user} | {video.publish_date}</p>
                <p>{video.deck}</p>
              </div>
            }
          />
        </Card>
      </Col>
      ))}
  </Row>
);
/* eslint-disable react/forbid-prop-types */
VideoRow.propTypes = {
  videos: PropTypes.array.isRequired,
};
/* eslint-enable */

export default VideoRow;
