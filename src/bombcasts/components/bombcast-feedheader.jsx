import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import FeedHeader from '../../components/feed-header';
import { fetchBombcastSearchVideos, setBombcastVideo } from '../actions/index';
import BombcastSearchResultsSelector from '../selectors/current-bombcast-search-results';

export const BombcastFeedHeader = props => (
  <FeedHeader
    category="Bombcast"
    placeholder="Search for Bombcast videos..."
    fetchVideos={props.fetchBombcastSearchVideos}
    results={props.bombcastSearchResults}
    currentResults={props.currentBombcastSearchResults}
    setVideo={props.setBombcastVideo}
  />
);

/* eslint-disable react/forbid-prop-types */
BombcastFeedHeader.propTypes = {
  bombcastSearchResults: PropTypes.array.isRequired,
  fetchBombcastSearchVideos: PropTypes.func.isRequired,
  currentBombcastSearchResults: PropTypes.array.isRequired,
  setBombcastVideo: PropTypes.func.isRequired,
};
/* eslint-enable */

const mapStateToProps = state => ({
  bombcastSearchResults: state.bombcasts.bombcastSearchResults,
  currentBombcastSearchResults: BombcastSearchResultsSelector(state),
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    fetchBombcastSearchVideos,
    setBombcastVideo,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BombcastFeedHeader);
