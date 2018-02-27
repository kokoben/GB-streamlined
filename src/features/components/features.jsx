import React from 'react';
import CurrentFeatureVideo from '../containers/current-feature-video';
import FeatureVideos from '../containers/feature-videos';
import FeedHeader from '../../components/feed-header';

export default () => (
  <div>
    <CurrentFeatureVideo />
    <FeedHeader
      category="Feature"
      placeholder="Search for Feature videos..."
    />
    <FeatureVideos />
  </div>
);
