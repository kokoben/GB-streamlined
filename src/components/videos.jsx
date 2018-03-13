import React from 'react';
import { Card, Row, Col, Pagination } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'moment';

const { Meta } = Card;

const VideosRow = props => (
  props.results.map(video => (
    <Col xs={24} sm={11} md={6} lg={6} xl={6}>
      <div style={{ margin: 16 }}>
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
                <p>
                  Posted by {video.user} |
                  &thinsp;{Moment(video.publish_date).format('MMM. D, YYYY h:mma')}
                </p>
                <p>{video.deck}</p>
              </div>
            }
          />
        </Card>
      </div>
    </Col>
  ))
);

const Videos = props => (
  <div>
    <Row type="flex" justify="left" style={{ width: '100%', margin: '0 auto' }}>
      <VideosRow
        onCardClick={props.onCardClick}
        results={props.results}
        span={24}
      />
    </Row>
    <Pagination
      size="small"
      defaultCurrent={1}
      defaultPageSize={24}
      total={props.num_results}
      onChange={props.onClickPageNum}
    />
  </div>
);

/* eslint-disable react/forbid-prop-types */
VideosRow.propTypes = {
  span: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
};

Videos.propTypes = {
  num_results: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
  onClickPageNum: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
};
/* eslint-enable */

export default Videos;
