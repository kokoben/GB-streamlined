import React from 'react';
import { Card, Row, Col, Pagination } from 'antd';
import PropTypes from 'prop-types';
import Moment from 'moment';

const { Meta } = Card;

const VideosRowFull = props => (
  props.results.map(video => (
    <Col className="cards-full" key={video.id} xs={24} sm={12} md={6} lg={6} xl={6}>
      <div style={{ margin: 16 }}>
        <Card
          onClick={() => props.onCardClick(video.id)}
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

const VideosRowMini = props => (
  props.results.map(video => (
    <Col className="cards-mini" key={video.id} xs={24} sm={12} md={6} lg={6} xl={6}>
      <div style={{ margin: 16 }}>
        <Card
          onClick={() => props.onCardClick(video.id)}
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
      <VideosRowFull
        onCardClick={props.onCardClick}
        results={props.results}
        span={24}
      />
      <VideosRowMini
        onCardClick={props.onCardClick}
        results={props.results}
        span={24}
      />
    </Row>
    <div style={{ float: 'left', paddingLeft: '14px' }}>
      {props.num_results} results
    </div>
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
VideosRowFull.propTypes = {
  span: PropTypes.number.isRequired,
  results: PropTypes.array.isRequired,
};

VideosRowMini.propTypes = {
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
