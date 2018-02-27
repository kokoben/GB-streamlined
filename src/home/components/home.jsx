import React from 'react';
import CurrentHomeVideo from '../containers/current-home-video';
import HomeVideos from '../containers/home-videos';
import FeedHeader from '../../components/feed-header';

export default () => (
  <div>
    <CurrentHomeVideo />
    <FeedHeader
      category=""
      placeholder="Search for videos..."
    />
    <HomeVideos />
  </div>
);
