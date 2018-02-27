import React from 'react';
import QuicklookVideos from '../containers/quicklook-videos';
import CurrentQuicklookVideo from '../containers/current-quicklook-video';
import FeedHeader from '../../components/feed-header';

export default () => (
  <div>
    <CurrentQuicklookVideo />
    <FeedHeader
      category="Quicklook"
      placeholder="Search for Quick Look videos..."
    />
    <QuicklookVideos />
  </div>
);

