import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchHomeSearchVideos, setHomeVideo } from '../actions/index';
import HomeSearchResultsSelector from '../selectors/current-home-search-results';

export const HomeFeedHeader = props => (
  <FeedHeader
    category=""
    placeholder="Search for videos..."
    fetchVideos={props.fetchHomeSearchVideos}
    results={props.homeSearchResults}
    currentResults={props.currentHomeSearchResults}
    setVideo={props.setHomeVideo}
  />
);

/* eslint-disable react/forbid-prop-types */
HomeFeedHeader.propTypes = {
  homeSearchResults: PropTypes.array.isRequired,
  currentHomeSearchResults: PropTypes.array.isRequired,
  fetchHomeSearchVideos: PropTypes.func.isRequired,
  setHomeVideo: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  homeSearchResults: state.home.homeSearchResults,
  currentHomeSearchResults: HomeSearchResultsSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchHomeSearchVideos,
    setHomeVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeFeedHeader);
