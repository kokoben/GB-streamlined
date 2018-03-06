import React from 'react';
import CurrentFeatureVideo from '../containers/current-feature-video';
import FeatureVideos from '../containers/feature-videos';
import FeatureFeedHeader from '../components/feature-feedheader';

export default () => (
  <div>
    <CurrentFeatureVideo />
    <FeatureFeedHeader />
    <FeatureVideos />
  </div>
);
