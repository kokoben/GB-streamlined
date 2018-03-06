import React from 'react';
import QuicklookVideos from '../containers/quicklook-videos';
import CurrentQuicklookVideo from '../containers/current-quicklook-video';
import QuicklookFeedHeader from '../components/quicklook-feedheader';

export default () => (
  <div>
    <CurrentQuicklookVideo />
    <QuicklookFeedHeader />
    <QuicklookVideos />
  </div>
);

