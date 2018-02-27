import React from 'react';
import CurrentBombcastVideo from '../containers/current-bombcast-video';
import BombcastVideos from '../containers/bombcast-videos';
import FeedHeader from '../../components/feed-header';

export default () => (
  <div>
    <CurrentBombcastVideo />
    <FeedHeader
      category="Bombcast"
      placeholder="Search for Bombcast videos..."
    />
    <BombcastVideos />
  </div>
);

