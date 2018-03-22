import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchFeatureSearchVideos, setFeatureVideo } from '../actions/index';
import FeatureSearchResultsSelector from '../selectors/current-feature-search-results';

export const FeatureFeedHeader = props => (
  <FeedHeader
    category="Feature"
    placeholder="Search for Feature videos..."
    fetchVideos={props.fetchFeatureSearchVideos}
    results={props.featureSearchResults}
    currentResults={props.currentFeatureSearchResults}
    setVideo={props.setFeatureVideo}
  />
);

/* eslint-disable react/forbid-prop-types */
FeatureFeedHeader.propTypes = {
  fetchFeatureSearchVideos: PropTypes.func.isRequired,
  featureSearchResults: PropTypes.array.isRequired,
  currentFeatureSearchResults: PropTypes.array.isRequired,
  setFeatureVideo: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  featureSearchResults: state.features.featureSearchResults,
  currentFeatureSearchResults: FeatureSearchResultsSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchFeatureSearchVideos,
    setFeatureVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FeatureFeedHeader);
