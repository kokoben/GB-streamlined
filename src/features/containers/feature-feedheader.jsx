import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchFeatureSearchVideos, setFeatureVideo } from '../actions/index';
import FeatureSearchResultsSelector from '../selectors/current-feature-search-results';

class FeatureFeedHeader extends Component {
  render() {
    return (
      <FeedHeader
        category="Feature"
        placeholder="Search for Feature videos..."
        fetchVideos={this.props.fetchFeatureSearchVideos}
        currentResults={this.props.currentFeatureSearchResults}
        setVideo={this.props.setFeatureVideo}
      />
    );
  }
}

/* eslint-disable react/forbid-prop-types */
FeatureFeedHeader.propTypes = {
  fetchFeatureSearchVideos: PropTypes.func.isRequired,
  currentFeatureSearchResults: PropTypes.array.isRequired,
  setFeatureVideo: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  currentFeatureSearchResults: FeatureSearchResultsSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchFeatureSearchVideos,
    setFeatureVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FeatureFeedHeader);
