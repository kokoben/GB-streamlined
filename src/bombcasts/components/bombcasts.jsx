import React from 'react';
import CurrentBombcastVideo from '../containers/current-bombcast-video';
import BombcastVideos from '../containers/bombcast-videos';
import BombcastFeedHeader from '../components/bombcast-feedheader';

export default () => (
  <div>
    <CurrentBombcastVideo />
    <BombcastFeedHeader />
    <BombcastVideos />
  </div>
);

