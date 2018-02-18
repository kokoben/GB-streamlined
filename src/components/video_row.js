import React from 'react';
import { Row, Col, Card } from 'antd';
const { Meta } = Card;

const VideoRow = props => (
  <Row gutter={16}>
    {/* build each video the row */}
    {props.videos.map((video, i) => 
      <Col span={6} key={i}>
        <Card
          onClick={() => props.onCardClick(video.id)}
          key={i}
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
    )}
  </Row>
)  


export default VideoRow;